"use client";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Question from "./Questions";
import Sidenav from "../SideNav/Sidenav";
import Header from "../common/Header";

interface QuestionProps {
  question: string;
  answer: string;
  context: string;
  ques_id: number;
  options: string[][];
}

export default function Mcq() {
  const [questions, setQuestions] = useState<QuestionProps[]>([]);
  const [answers, setAnswers] = useState<string[]>([]);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [correctAnswersCount, setCorrectAnswersCount] = useState(0);
  const token = localStorage.getItem("token");
  const email = "rabibhaque200@gmail.com";
  const { contentId } = useParams();
  console.log(contentId);
  console.log(token);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const questionRes = await axios.get(
          `http://localhost:3001/api/mcq/${contentId}`
        );

        if (questionRes.status !== 200) {
          throw new Error("Failed to fetch Data");
        }

        const questionsData = questionRes.data.map((question: any) => ({
          ...question,
          options: question.options.map((opt: any) => opt.options),
        }));
        console.log(questionsData);

        setQuestions(questionsData);
        setAnswers(new Array(questionsData.length).fill(""));
      } catch (error) {
        console.log("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const handleOptionChange = (index: number, selectedOption: string) => {
    if (!isSubmitted) {
      const newAnswers = [...answers];
      newAnswers[index] = selectedOption;
      setAnswers(newAnswers);
    }
  };

  const handleSubmit = async () => {
    setIsSubmitted(true);
    const correctCount = questions.reduce((count, question, index) => {
      if (answers[index] === question.answer) {
        return count + 1;
      }
      return count;
    }, 0);

    const data = new FormData();

    data.append("content_id", contentId);
    data.append("total_marks", questions.length);
    data.append("achieved_marks", correctCount);

    // for (const pair of data.entries()) {
    //   console.log(`${pair[0]}: ${pair[1]}`);
    // }

    try {
      const response = await axios.post(
        "http://127.0.0.1:8000/api/mcq/answer/upload",
        data,
        {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (response.status == 200) {
        console.log("Set Answers in database successfully!");
        setCorrectAnswersCount(correctCount);
      }
    } catch (error) {
      console.log("Failed to fetch Instructors details", error);
      if (error.response && error.response.status === 401) {
        console.log("error response");
      } else {
        console.log(error);
      }
    }
  };

  return (
    <div className="flex sm:gap-5 bg-[#E5EAEA]">
      <Sidenav />
      <div className="flex-1 overflow-y-auto h-screen mx-5 sm:m-0 sm:mr-5">
        <Header pageName={"Give Exam"} />
        <form action="" className="flex-1">
          {questions.map((question, index) => (
            <Question
              key={index}
              index={index}
              question={question.question}
              options={question.options}
              correct={question.answer}
              context={question.context}
              onOptionChange={handleOptionChange}
              submittedAnswers={isSubmitted ? answers : []}
              isSubmitted={isSubmitted}
            />
          ))}
        </form>
        <div className="flex justify-center m-5 md:w-[75%]">
          <button
            onClick={handleSubmit}
            disabled={isSubmitted}
            className={` bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-10 rounded text-lg ${
              isSubmitted ? "opacity-50 cursor-not-allowed" : ""
            }`}
          >
            Submit
          </button>
        </div>
        {isSubmitted && (
          <div className="flex justify-center m-5 md:w-[75%]">
            <p>
              You answered {correctAnswersCount} out of {questions.length}{" "}
              questions correctly.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
