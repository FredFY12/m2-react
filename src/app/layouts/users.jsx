import React from "react";
import UserPage from "../components/userPage";
import UsersList from "../components/usersList";
import { useParams } from "react-router-dom";

const Users = () => {
  const params = useParams();
  const { userId } = params;

  return <div>{userId ? <UserPage userId={userId} /> : <UsersList />}</div>;
};

export default Users;
