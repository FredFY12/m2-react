import React, { useState } from "react";
import api from "../api";

const Users = () => {
  const [users, setUsers] = useState(api.users.fetchAll());

  const handleDelete = (userId) => {
    setUsers((prevState) => prevState.filter((user) => user._id !== userId));
  };

  const renderPhrase = (number) => {
    const amount = Number(number.toString().slice(-1));
    return !number
      ? "Никто не"
      : amount >= 2 && amount <= 4 && (number < 5 || number > 14)
      ? number + " человека"
      : number + " человек";
  };

  return (
    <>
      <h2>
        <span className={"badge bg-" + (users.length ? "primary" : "danger")}>
          {renderPhrase(users.length)} тусонет с тобой сегодня
        </span>
      </h2>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Имя</th>
            <th scope="col">Качества</th>
            <th scope="col">Профессия</th>
            <th scope="col">Встретился, раз</th>
            <th scope="col">Оценка</th>
            <th scope="col"></th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user._id}>
              <th>{user.name}</th>
              <th>
                {user.qualities.map((qualities) => (
                  <span
                    key={qualities._id}
                    className={"badge m-2 bg-" + qualities.color}
                  >
                    {qualities.name}
                  </span>
                ))}
              </th>
              <th key={user.profession._id}>{user.profession.name}</th>
              <th>{user.completedMeetings}</th>
              <th>{user.rate}/5</th>
              <th>
                <button
                  className="btn btn-danger"
                  onClick={() => handleDelete(user._id)}
                >
                  delete
                </button>
              </th>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default Users;
