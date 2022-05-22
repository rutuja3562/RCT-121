import React from "react";
import { useState } from "react";
export const Pagination = ({
  handlePageChange,
  page,
  lastPage,
  currentPage,
}) => {
  const arr = new Array(lastPage).fill(0);
  return (
    <div>
      <div>
        {arr.map((e, page) => {
          return (
            <button key={page}
              disabled={page + 1 === currentPage}
              onClick={() => handlePageChange(page + 1)}
            >
              {page + 1}
            </button>
          );
        })}
      </div>
      <button disabled={page == 1} onClick={() => handlePageChange(page - 1)}>
        prev
      </button>
      <button onClick={() => handlePageChange(page + 1)}>next</button>
    </div>
  );
};
