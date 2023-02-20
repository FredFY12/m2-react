/* eslint-disable multiline-ternary */
import React from "react";
import PropTypes from "prop-types";

const BookMark = ({ status, ...rest }) => {
    const toggleBookmark = () => {
        return status ? (
            <i className="bi bi-bookmark-fill"></i>
        ) : (
            <i className="bi bi-bookmark"></i>
        );
    };
    return (
        <td>
            <button className="btn btn-outline-dark " onClick={rest.onBookmark}>
                {toggleBookmark()}
            </button>
        </td>
    );
};

BookMark.propTypes = {
    status: PropTypes.string.isRequired
};
export default BookMark;
