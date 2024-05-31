import google.generativeai as genai
from dotenv import load_dotenv
import os
import uuid
import fastapi
from fastapi import Request, HTTPException
from fastapi.responses import StreamingResponse
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from typing import Dict, List, Optional

load_dotenv()

GEMINI_API_KEY = os.getenv('GEMINI_API_KEY')
print("loaded GEMINI_API_KEY:", GEMINI_API_KEY)
if not GEMINI_API_KEY:
    raise ValueError("GEMINI_API_KEY is not set")

genai.configure(api_key=GEMINI_API_KEY)

model = genai.GenerativeModel('gemini-1.5-flash-latest')

app = fastapi.FastAPI()

# Configure CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],  # Update with your frontend URL
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Initialize conversation history dictionary to store conversation history for each conversation
conversation_histories = {}

class Message(BaseModel):
    role: str
    parts: List[str]

class GenerateRequest(BaseModel):
    conversation_id: str
    prompt: str

class GenerateResponse(BaseModel):
    status: str
    response: Optional[str] = None
    message: Optional[str] = None

class CreateConversationResponse(BaseModel):
    status: str
    conversation_id: str

class ConversationResponse(BaseModel):
    status: str
    response: Optional[str] = None
    message: Optional[str] = None

async def generate_response(history: List[Message]):
    chat = model.start_chat(history=[msg.dict() for msg in history])
    response = chat.send_message(history[-1].parts[0])  
    return response.text

@app.get("/")
async def root():
    with open('index.html') as f:
        return fastapi.responses.HTMLResponse(content=f.read())

@app.post("/generate", response_model=GenerateResponse)
async def generate(data: GenerateRequest):
    conversation_id = data.conversation_id
    prompt = data.prompt

    if conversation_id not in conversation_histories:
        raise HTTPException(status_code=404, detail="Conversation not found")

    conversation_history = conversation_histories[conversation_id]
    conversation_history.append(Message(role='user', parts=[prompt]))
    response_text = await generate_response(conversation_history)
    conversation_history.append(Message(role='model', parts=[response_text]))

    return GenerateResponse(status="success", response=response_text)

@app.post("/process", response_model=GenerateResponse)
async def process(data: GenerateRequest):
    return await generate(data)

@app.get("/conversations/", response_model=List[str])
async def get_all_conversations():
    return list(conversation_histories.keys())

@app.post("/conversation/create/", response_model=CreateConversationResponse)
async def create_conversation():
    conversation_id = str(uuid.uuid4())
    conversation_histories[conversation_id] = []
    return CreateConversationResponse(status="success", conversation_id=conversation_id)

@app.get("/conversation/{conversation_id}/chats/", response_model=List[Message])
async def get_chats_by_conversation(conversation_id: str):
    if conversation_id not in conversation_histories:
        raise HTTPException(status_code=404, detail="Conversation not found")
    return conversation_histories[conversation_id]

@app.post("/conversation/{conversation_id}/send_message/", response_model=ConversationResponse)
async def send_message_to_conversation(conversation_id: str, message: Message):
    if conversation_id not in conversation_histories:
        raise HTTPException(status_code=404, detail="Conversation not found")
    
    conversation_history = conversation_histories[conversation_id]
    conversation_history.append(message)
    response_text = await generate_response(conversation_history)
    conversation_history.append(Message(role='model', parts=[response_text]))
    
    return ConversationResponse(status="success", response=response_text)
