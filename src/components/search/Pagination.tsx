// @ts-nocheck
import React from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";

const Pagination = ({ totalPages, currentPage, onPageChange }) => {
  const generatePagination = () => {
    const paginationArray = [1]; // Always include page 1
    if (totalPages === 1) return paginationArray; // Only one page case

    if (currentPage > 3) paginationArray.push("...");

    const start = Math.max(2, currentPage - 2);
    const end = Math.min(currentPage + 2, totalPages - 1);

    for (let i = start; i <= end; i++) paginationArray.push(i);

    if (currentPage < totalPages - 2) paginationArray.push("...");

    paginationArray.push(totalPages); // Always include last page

    return paginationArray;
  };

  const paginationArray = generatePagination();

  return (
    <nav>
      <ul className="inline-flex gap-2 md:gap-5 h-10 items-center">
        {/* Previous button */}
        <li>
          <button
            onClick={() => onPageChange(currentPage - 1)}
            disabled={currentPage === 1}
            className="size-10 flex items-center justify-center rounded-full border-[1.5px] border-primary transition-all 
              cursor-pointer disabled:opacity-50 disabled:pointer-events-none
              hover:bg-primary hover:text-white text-primary"
          >
            <ArrowLeft className="size-4 md:size-6 group-disabled:text-gray-400" />
          </button>
        </li>

        {/* Pagination Numbers */}
        {paginationArray.map((page, index) => (
          <li key={index}>
            {typeof page === "number" ? (
              <button
                onClick={() => onPageChange(page)}
                className={`size-10 flex items-center justify-center rounded-full border-[1.5px] transition-all cursor-pointer
                  ${
                    page === currentPage
                      ? "bg-primary text-white border-primary"
                      : "text-primary border-border hover:bg-primary hover:text-white"
                  }`}
              >
                {page}
              </button>
            ) : (
              <span className="text-primary px-2">...</span>
            )}
          </li>
        ))}

        {/* Next button */}
        <li>
          <button
            onClick={() => onPageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
            className="size-10 flex items-center justify-center rounded-full border-[1.5px] border-primary transition-all 
              cursor-pointer disabled:opacity-50 disabled:pointer-events-none text-primary
              hover:bg-primary hover:text-white"
          >
            <ArrowRight className="size-4 md:size-6" />
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Pagination;
