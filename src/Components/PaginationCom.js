import React from "react";
import ReactPaginate from "react-paginate";

export default function PaginationCom({ pageNumber, pageCountData }) {
  function handlePageClick(data) {
    pageNumber(data.selected + 1);
  }

  return (
    <div className="d-flex justify-content-center align-items-center my-5">
      <ReactPaginate
        onPageChange={handlePageClick}
        marginPagesDisplayed={2}
        pageRangeDisplayed={2}
        pageCount={pageCountData}
        renderOnZeroPageCount={null}
        // Container
        containerClassName="pagination"
        // Page
        pageClassName="page-item"
        pageLinkClassName="page-link"
        // Previous
        previousLabel="< Previous"
        previousClassName="page-item"
        previousLinkClassName="page-link"
        // Next
        nextLabel="Next >"
        nextClassName="page-item"
        nextLinkClassName="page-link"
        // Break(...)
        breakLabel="..."
        breakClassName="page-item"
        breakLinkClassName="page-link"
        // Active
        activeClassName="active"
      />
    </div>
  );
}
