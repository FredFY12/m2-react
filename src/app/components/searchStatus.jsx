/* eslint-disable indent */
import React from "react";
import PropTypes from "prop-types";

const SearchStatus = ({ length }) => {
    const renderPhrase = (number) => {
        const amount = Number(number.toString().slice(-1));
        return !number
            ? "Никто не"
            : amount >= 2 && amount <= 4 && (number < 5 || number > 14)
            ? number + " человека"
            : number + " человек";
    };

    return (
        <h2>
            <span className={"badge bg-" + (length ? "primary" : "danger")}>
                {renderPhrase(length)} тусонет с тобой сегодня
            </span>
        </h2>
    );
};

SearchStatus.propTypes = {
    length: PropTypes.number.isRequired
};

export default SearchStatus;
