import React, { useState } from "react";
import api from "../api";

const Users = () => {
  const [users, setUsers] = useState(api.users.fetchAll());

  const handleDelete = (userId) => {
    setUsers((prevState) => prevState.filter((user) => user._id !== userId));
  };

  const renderPhrase = (number) => {};

  return (
    <>
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
                  className="badge bg-danger"
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
