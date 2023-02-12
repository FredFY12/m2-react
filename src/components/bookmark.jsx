import React from "react";

const BookMark = ({ status, ...rest }) => {
  const toggleBookmarkCheck = () => {
    return status ? (
      <i className="bi bi-bookmark-fill"></i>
    ) : (
      <i className="bi bi-bookmark"></i>
    );
  };
  return (
    <td>
      <button className="btn btn-outline-dark " onClick={rest.onBookmark}>
        {toggleBookmarkCheck()}
      </button>
    </td>
  );
};
export default BookMark;
