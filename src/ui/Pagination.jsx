import { HiChevronLeft, HiChevronRight } from "react-icons/hi2";
import { useSearchParams } from "react-router-dom";
import { PAGE_SIZE } from "../utils/constants";

export default function Pagination({ count }) {
  const [searchParams, setSearchParams] = useSearchParams();

  const currentPage = !searchParams.get("page")
    ? 1
    : Number(searchParams.get("page"));

  const pageCount = Math.ceil(count / PAGE_SIZE);

  function nextPage() {
    const next = currentPage === pageCount ? currentPage : currentPage + 1;

    searchParams.set("page", next);
    setSearchParams(searchParams);
  }

  function prevPage() {
    const prev = currentPage === 1 ? currentPage : currentPage - 1;

    searchParams.set("page", prev);
    setSearchParams(searchParams);
  }
  if (pageCount <= 1) return null;

  return (
    <div className="w-full flex justify-between items-center">
      <p className="text-2xl ml-3">
        Showing{" "}
        <span className="font-semibold">
          {(currentPage - 1) * PAGE_SIZE + 1}
        </span>{" "}
        to{" "}
        <span className="font-semibold">
          {currentPage === pageCount ? count : currentPage * PAGE_SIZE}
        </span>{" "}
        of <span className="font-semibold">{count}</span> results
      </p>

      <div className="flex gap-2">
        <button
          disabled={currentPage === 1}
          onClick={prevPage}
          className="flex items-center justify-center gap-2 py-2 px-5 transition-all border-0 rounded-sm font-semibold text-2xl active:bg-indigo-700 active:text-indigo-100 hover:bg-indigo-600 hover:text-indigo-100 disabled:bg-gray-100 disabled:text-gray-800"
        >
          <HiChevronLeft className="text-3xl" />
          <span>Previous</span>
        </button>
        <button
          disabled={currentPage === pageCount}
          onClick={nextPage}
          className="flex items-center justify-center gap-2 py-2 px-5 transition-all border-0 rounded-sm font-semibold text-2xl active:bg-indigo-700 active:text-indigo-100 hover:bg-indigo-600 hover:text-indigo-100 disabled:bg-gray-100 disabled:text-gray-800"
        >
          <span>Next</span>
          <HiChevronRight className="text-3xl" />
        </button>
      </div>
    </div>
  );
}
