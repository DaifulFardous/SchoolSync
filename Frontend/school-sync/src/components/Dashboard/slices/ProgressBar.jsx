const ProgressBar = (progress) => {
  return (
    <div className="relative h-2 w-full bg-[#D5CBFB] rounded">
      <div
        className="absolute top-0 left-0 bg-[#2B59CE] rounded h-full"
        style={{ width: `${progress}%` }}
      ></div>
    </div>
  );
};
export default ProgressBar;
