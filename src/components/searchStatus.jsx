import React from "react";

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

export default SearchStatus;
