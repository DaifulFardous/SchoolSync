import Sidenav from "../../SideNav/Sidenav";
import MCQ from "./MCQ";

export default function McqList() {
  const questions = [
    {
      question: "What is this?",
      options: ["Bird", "Fish", "Car", "Bike"],
    },
  ];
  return (
    <div className="flex bg-pink-100 bg-opacity-20">
      <Sidenav />
      <div className="m-5 w-full">
        {questions.map((question, index) => (
          <MCQ
            key={index}
            index={index}
            question={question.question}
            options={question.options}
            meaning={''}
          />
        ))}
      </div>
    </div>
  );
}
