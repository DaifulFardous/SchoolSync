import Sidenav from "../../SideNav/Sidenav";
import MCQ from "./MCQ";

export default function McqList() {
  const questions = [
    {
      question: "What is this?",
      options: ["Bird", "Fish", "Car", "Bike"],
    },
    {
      question: "What is this?",
      options: ["Bird", "Fish", "Car", "Bike"],
    },
  ];
  const suggestedOptions = 'Plane, Roads, Cross';
  return (
    <div className="flex bg-pink-100 bg-opacity-20 w-full">
      <Sidenav />
      <div className="w-[75%]">
        {questions.map((question, index) => (
          <MCQ
            key={index}
            index={index}
            question={question.question}
            options={question.options}
            meaning={''}
            suggestedOptions={suggestedOptions}
          />
        ))}
      </div>
    </div>
  );
}
