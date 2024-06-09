import React from "react";

type PaginationProps = {
  page: number;
  lastPage: number;
  setPage: any;
};

const Pagination = ({ page, lastPage, setPage }: PaginationProps) => {
  const scrollToTop = () => {
    scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const handleNextPage = () => {
    if (page === lastPage) {
      setPage(1);
    } else {
      setPage((prev: number) => prev + 1);
    }
    scrollToTop();
  };

  const handlePrevPage = () => {
    if (page === 1) {
      setPage(lastPage);
    } else {
      setPage((prev: number) => prev - 1);
    }
    scrollToTop();
  };

  return (
    <div className="flex justify-center items-center p-4 px-2 gap-4">
      <button
        onClick={handlePrevPage}
        className="transition-all hever:text-color-accent"
      >
        Prev
      </button>
      <p>
        {page} of {lastPage}
      </p>
      <button
        onClick={handleNextPage}
        className="transition-all hever:text-color-accent"
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
