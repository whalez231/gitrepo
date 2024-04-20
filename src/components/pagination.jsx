import React from "react";
import "../assets/styles/searchRepo.css";

const Pagination = ({
  reposPerPage,
  totalRepos,
  paginate,
  prevPage,
  nextPage,
  currentPage,
}) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalRepos / reposPerPage); ++i) {
    pageNumbers.push(i);
  }

  return (
    <nav className="pagination--nav">
      {totalRepos > 0 && (
        <>
          <ul className="pagination--lists">
            {currentPage === 1 ? (
              <li className="pagination--list">
                <button className="page--btn" disabled>
                  Prev
                </button>
              </li>
            ) : (
              <li className="pagination--list">
                <button onClick={() => prevPage()} className="page--btn">
                  Prev
                </button>
              </li>
            )}
            {pageNumbers.map((number) => (
              <li key={number} className="pagination--list__nums">
                <button onClick={() => paginate(number)} className="page--btn">
                  {number}
                </button>
              </li>
            ))}
            <li className="pagination--list">
              <button onClick={() => nextPage()} className="page--btn">
                Next
              </button>
            </li>
          </ul>
          <p className="pagination--num">
            Page: {currentPage} of {pageNumbers.length}
          </p>
        </>
      )}
    </nav>
  );
};

export default Pagination;
