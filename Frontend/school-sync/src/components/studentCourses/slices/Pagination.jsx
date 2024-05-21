import { MdNavigateNext } from "react-icons/md";
import { MdNavigateBefore } from "react-icons/md";

const Pagination = ({
  coursesPerPage,
  totalCourses,
  paginate,
  currentPage,
  nextPage,
  prevPage,
}) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalCourses / coursesPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav>
      <ul className="flex gap-5 justify-center py-5">
        <li>
          <button
            onClick={prevPage}
            className={`px-3 py-1 border rounded text-lg ${
              currentPage === 1 ? "cursor-not-allowed text-gray-500" : ""
            }`}
            disabled={currentPage === 1}
          >
            <MdNavigateBefore />
          </button>
        </li>
        <div className="flex gap-2">
          {pageNumbers.map((number) => (
            <li
              key={number}
              className={`page-item ${
                currentPage === number ? "bg-blue-500 text-white" : ""
              }`}
            >
              <button
                onClick={() => paginate(number)}
                className="px-3 py-1 border rounded"
              >
                {number}
              </button>
            </li>
          ))}
        </div>
        <li>
          <button
            onClick={nextPage}
            className={`px-3 py-1 border rounded text-lg ${
              currentPage === pageNumbers.length
                ? "cursor-not-allowed text-gray-500"
                : ""
            }`}
            disabled={currentPage === pageNumbers.length}
          >
            <MdNavigateNext />
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Pagination;
