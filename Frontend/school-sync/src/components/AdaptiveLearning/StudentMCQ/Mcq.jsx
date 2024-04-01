import React, { useState } from "react";
import Question from "./Question";
import Sidenav from "../../SideNav/Sidenav";

export default function Mcq() {
  const questions = [
    {
      question: "What is this?",
      options: ["Bird", "Fish", "Car", "Bike"],
      correct: "Bird",
      context: 'context context context'
    },
    {
      question: "What is this?",
      options: ["Bird", "Fish", "Car", "Bike"],
      correct: "Car",
      context: 'context context context'
    },
  ];

  const [answers, setAnswers] = useState(
    new Array(questions.length).fill(null)
  );
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleOptionChange = (index, selectedOption) => {
    if (!isSubmitted) {
      const newAnswers = [...answers];
      newAnswers[index] = selectedOption;
      setAnswers(newAnswers);
    }
  };

  const handleSubmit = () => {
    setIsSubmitted(true);
  };

  return (
    <div className="flex flex-col md:flex-row bg-pink-100 bg-opacity-20 px-5 min-h-[100vh]">
      <div className="hidden md:block">
        <Sidenav />
      </div>
      <div className="flex-1">
        <form action="" className="flex-1">
          {questions.map((question, index) => (
            <Question
              key={index}
              index={index}
              question={question.question}
              options={question.options}
              correct={question.correct}
              context={question.context}
              onOptionChange={handleOptionChange}
              submittedAnswers={isSubmitted ? answers : null}
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
      </div>
    </div>
  );
}
