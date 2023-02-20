import React, { useState } from "react";
import api from "./api";
import Users from "./components/users";
import SearchStatus from "./components/searchStatus";

function App() {
    const [users, setUsers] = useState(api.users.fetchAll());

    const handleDelete = (userId) => {
        setUsers((prevState) =>
            prevState.filter((user) => user._id !== userId)
        );
    };

    const handleToggleBookMark = (id) => {
        const newUsers = users.map((user) => {
            return user._id !== id
                ? user
                : { ...user, bookmark: !user.bookmark };
        });
        setUsers(newUsers);
    };

    return (
        <div>
            <SearchStatus length={users.length} />
            <Users
                users={users}
                onDelete={handleDelete}
                onBookMark={handleToggleBookMark}
            />
        </div>
    );
}

export default App;
