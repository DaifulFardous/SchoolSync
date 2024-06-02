"use client";
import axios from "axios";
import React, { useState } from "react";
import { useParams } from "react-router-dom";
import Sidenav from "../SideNav/Sidenav";
import Header from "../common/Header";
import MCQ from "./slices/MCQ";

export default function Mcq() {
  const [paragraph, setParagraph] = useState("");
  const [selectedWords, setSelectedWords] = useState([]);
  const [enableHighlight, setEnableHighlight] = useState(false);
  const [randomIDs, setRandomIDs] = useState<number[]>([]);
  const [mcqDataList, setMcqDataList] = useState([]);
  const { contentId } = useParams();

  const handleWordSelection = (word: string) => {
    if (enableHighlight && !selectedWords.includes(word)) {
      setSelectedWords([...selectedWords, word]);
    }
  };
  const handleDeleteWordSelection = () => {
    const updatedSelectedWords = [...selectedWords];
    updatedSelectedWords.pop();
    setSelectedWords(updatedSelectedWords);
  };

  const handleSubmit = async (e: any) => {
    try {
      e.preventDefault();

      let sentenceWithoutMarks = paragraph;
      selectedWords.forEach((phrase) => {
        const escapedPhrase = phrase?.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
        const regex = new RegExp(escapedPhrase, "g");
        sentenceWithoutMarks = sentenceWithoutMarks.replace(
          regex,
          `**${phrase}**`
        );
      });

      const sentenceWithMarks = sentenceWithoutMarks
        .split(".")
        .filter((sentence) => sentence.includes("**"));

      const mcqRequests = sentenceWithMarks.map(async (sentence, i) => {
        const serverUrl = "http://127.0.0.1:5000";
        const mcqResponse = await axios.post(`${serverUrl}/api/generate_mcq`, {
          sentence,
        });

        if (mcqResponse.status !== 200) {
          throw new Error("Failed to generate MCQ");
        }

        const data = mcqResponse.data;

        // const random_ID = randomIDs[i];

        try {
          await axios.post("http://localhost:3001/api/mcq", {
            email: "rabibhaque200@gmail.com",
            contentId: contentId,
            ques_id: data.random_id,
            question: data.question,
            answer: data.answer,
            context: paragraph,
          });
        } catch (error) {
          console.error("Error adding Question:", error);
          throw new Error("Failed to add question");
        }

        return data;
      });

      const newMcqDataList = await Promise.all(mcqRequests);

      setMcqDataList([...mcqDataList, ...newMcqDataList]);

      const optionsPromises = newMcqDataList.map(async (data, i) => {
        try {
          await axios.post("http://localhost:3001/api/options", {
            options: [data.answer],
            ques_id: data.random_id,
          });
        } catch (error) {
          console.error("Error adding Answer in Options Table", error);
        }
      });

      await Promise.all(optionsPromises);
    } catch (error) {
      console.error("Error in handleSubmit:", error);
    }
  };

  // const selectOption = (index: number, selectedOption: string) => {
  //   console.log(selectedOption);
  // };
  // const savedOptions = (additionalOptions: string[] | null) => {
  //   console.log(additionalOptions);
  // };

  const deleteQuestion = async (index: number, ques_id: number) => {
    const updatedMcqDataList = [...mcqDataList];
    updatedMcqDataList.splice(index, 1);
    setMcqDataList(updatedMcqDataList);

    try {
      await axios.delete(`http://localhost:3001/api/mcq/${ques_id}`);
      console.log("Deleted Successfully");
    } catch (error) {
      console.log("Error in deleteQuestion: ", error);
    }
  };

  return (
    <div className="flex sm:gap-5 bg-[#E5EAEA]">
      <Sidenav />
      <div className="flex-1 overflow-y-auto h-screen mx-5 sm:m-0 sm:mr-5">
        <Header pageName={"adaptiveLearning"} />
        <form onSubmit={handleSubmit}>
          <label className="gap-10">
            <textarea
              name=""
              id=""
              value={paragraph}
              onChange={(e) => setParagraph(e.target.value)}
              style={{
                width: "90%",
                height: "400px",
                padding: "10px",
                border: "1px solid #ccc",
                borderRadius: "5px",
                resize: "none",
                fontFamily: "Arial, sans-serif",
                fontSize: "16px",
                color: "#000",
                backgroundColor: "#fff",
                justifyContent: "center",
              }}
              onSelect={(event) => {
                const selectedText = event.target.value.substring(
                  event.target.selectionStart,
                  event.target.selectionEnd
                );
                handleWordSelection(selectedText);
              }}
            />
          </label>
          <br />
          <div>Selected Highlights: {selectedWords.join(", ")}</div>

          <div className="flex justify-center text-center gap-5 ">
            <button
              type="button"
              className="bg-gray-300 h-[40px] px-5 flex items-center"
              onClick={() => {
                setEnableHighlight(!enableHighlight);
              }}
            >
              {enableHighlight ? "Disable Highlight" : "Enable Highlight"}
            </button>{" "}
            <button
              type="submit"
              className="bg-gray-300 h-[40px] px-5 flex items-center"
            >
              Generate MCQ
            </button>
            <button
              type="button"
              className="bg-gray-300 h-[40px] px-5 flex items-center"
              onClick={handleDeleteWordSelection}
            >
              Delete Latest Highlight
            </button>
          </div>
        </form>

        {mcqDataList.length > 0 && (
          <div className="flex-col justify-center gap-10">
            <h3>Generated MCQ Data:</h3>
            {mcqDataList.map((mcqData, index) => (
              <MCQ
                key={index}
                index={index}
                ques_id={mcqData.random_id}
                paragraph={paragraph}
                question={mcqData.question}
                options={mcqData.distractors}
                answer={mcqData.answer}
                onDelete={() => deleteQuestion(index, mcqData.random_id)}
              />
            ))}
          </div>
        )}
        {/* <div className="flex justify-center">Confirm</div> */}
      </div>
    </div>
  );
}
