import React from "react";

const Card = ({ icon, count, label, onClick }) => {
  return (
    <div onClick={onClick} className="cursor-pointer bg-white flex-1 p-5 rounded w-full min-h-[200px] shadow-md flex items-center justify-around">
      <div className="p-5 rounded-full border w-min h-min">
        {icon}
      </div>
      <div className="flex flex-col gap-1 items-center text-lg">
        <div className="text-[#6956E5]">
            {count}
        </div>
        <div>
            {label}
        </div>
      </div>
    </div>
  );
};

export default Card;
