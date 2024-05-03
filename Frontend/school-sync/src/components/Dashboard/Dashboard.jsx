import Sidenav from "./../SideNav/Sidenav";
import Assignments from "./Assignments";
import Completion from "./Completion";
import RightSideBar from "./RightSideBar";
import SearchBar from "./SearchBar";
function Dashboard() {
  const Completions = [
    {
      subject: "Organic chemistry",
      chapter: 1,
      progress: 40,
    },
    {
      subject: "State of matter",
      chapter: 2,
      progress: 50,
    },
    {
      subject: "Preposition",
      chapter: 3,
      progress: 55,
    },
    {
      subject: "Chemical Changes",
      chapter: 4,
      progress: 55,
    },
    {
      subject: "Chemical Changes",
      chapter: 5,
      progress: 45,
    },
  ];
  const AssignmentsData = [
    {
      subject: "Organic chemistry",
      chapter: 1,
      page: 14,
      deadline: "10:00 AM",
      status: "Pending",
    },
    {
      subject: "State of matter",
      chapter: 2,
      page: 19,
      deadline: "11:00 AM",
      status: "Completed",
    },
  ];

  const schedules = [
    {
      subject: "Physics",
      completed: "6 of 20 chapters",
    },
    {
      subject: "Chemistry",
      completed: "8 of 20 chapters",
    },
    {
      subject: "Mathematics",
      completed: "5 of 20 chapters",
    },
    {
      subject: "Biology",
      completed: "4 of 20 chapters",
    },
  ];

  const upComingEvents = [
    {
      title: "Presentation for maths",
      date: "Coming soon",
      imageURL:
        "https://cdn.pixabay.com/photo/2014/10/02/08/30/honey-bee-469560_1280.png",
    },
    {
      title: "Presentation for maths",
      date: "Coming soon",
      imageURL:
        "https://cdn.pixabay.com/photo/2012/04/26/19/42/honeybee-42907_1280.png",
    },
  ];
  return (
    <div className="bg-[#e5eaea] min-h-screen">
      <div className="flex flex-col md:flex-row gap-5">
        <div className="hidden md:block">
          <Sidenav />
        </div>
        <div className="flex flex-col gap-10 md:w-[50vw] mx-5">
          <SearchBar />
          <Completion completions={Completions} />
          <Assignments assignments={AssignmentsData} />
        </div>
        <RightSideBar schedules={schedules} upComing={upComingEvents} />
      </div>
    </div>
  );
}

export default Dashboard;
