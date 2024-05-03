import React from "react";

const UpcomingEvents = ({ upComing }) => {
  return (
    <div className="text-black flex flex-col gap-5">
      <div className="text-[20px] font-bold">Upcoming Events</div>
      {upComing.map((event, index) => (
        <div className="flex gap-5 items-center" key={index}>
          <div className="w-[80px] h-[65px] bg-[#D9D9D9] rounded-[10px] flex items-center justify-center">
            <img
              src={event.imageURL}
              alt="Event"
              className="h-[45px] w-[45px]"
            />
          </div>
          <div>
            <div className="text-[14px] font-bold">{event.title}</div>
            <div className="text-[12px]">{event.date}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default UpcomingEvents;
