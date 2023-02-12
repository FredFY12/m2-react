import React from "react";
import User from "./user";

const Users = ({ users, ...rest }) => {
  const renderUsers = users.map((user) => (
    <User
      key={user._id}
      user={user}
      onDelete={rest.onDelete}
      onBookmark={rest.onBookMark}
    />
  ));

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
        <tbody>{renderUsers}</tbody>
      </table>
    </>
  );
};

export default Users;
