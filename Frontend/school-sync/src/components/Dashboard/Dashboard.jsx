import Sidenav from "../SideNav/Sidenav";
import Header from "../common/Header";
import Assignments from "./slices/Assignments";
import Completion from "./slices/Completion";

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
  return (
    <div className="flex sm:gap-5 bg-[#E5EAEA]">
      <Sidenav />
      <div className="flex-1 overflow-y-auto h-screen mx-5 sm:m-0 sm:mr-5">
        <Header pageName={"Dashboard"} />
        <div className="flex flex-col gap-10">
          <Completion completions={Completions} />
          <Assignments assignments={AssignmentsData} />
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
