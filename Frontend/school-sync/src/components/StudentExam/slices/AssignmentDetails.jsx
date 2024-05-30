import React from "react";

const AssignmentDetails = () => {
  return (
    <div className="w-full flex flex-col gap-5">
      <div>Assignment Activity</div>
      <textarea
        name=""
        id=""
        placeholder="Write a short about your assignment"
        className="bg-transparent w-full border-b"
      />
    </div>
  );
};

export default AssignmentDetails;
