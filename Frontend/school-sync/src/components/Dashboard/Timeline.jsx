import React from 'react';

const Timeline = () => {
  const getDayName = (index) => {
    const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    const today = new Date();
    const dayIndex = (today.getDay() + index) % 7;
    return days[dayIndex];
  };

  const getDate = (index) => {
    const today = new Date();
    today.setDate(today.getDate() + index);
    return today.getDate();
  };

  const currentMonth = new Date().toLocaleString('default', { month: 'long' });

  return (
    <div className="flex flex-col gap-3">
      <div className="text-black text-[20px] font-bold">{currentMonth} 2023</div>
      <div className="flex gap-5">
        {[0, 1, 2, 3].map((index) => (
          <div
            key={index}
            className="h-[40px] w-[40px] bg-[#D9D9D9] rounded-[10px] text-[12px] text-black flex flex-col items-center justify-center"
          >
            <div>{getDayName(index)}</div>
            <div>{getDate(index)}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Timeline;
