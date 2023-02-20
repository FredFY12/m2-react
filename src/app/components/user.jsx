import React from "react";
import BookMark from "./bookmark";
import Qualitie from "./qualitie";
import PropTypes from "prop-types";

const User = ({ user, ...rest }) => {
    const handleDelete = () => rest.onDelete(user._id);

    return (
        <tr key={user._id}>
            <th>{user.name}</th>
            <th>
                {user.qualities.map((item) => (
                    <Qualitie key={item._id} {...item} />
                ))}
            </th>
            <th key={user.profession._id}>{user.profession.name}</th>
            <th>{user.completedMeetings}</th>
            <th>{user.rate}/5</th>
            <BookMark
                status={user.bookmark}
                onBookmark={() => rest.onBookmark(user._id)}
            />
            <th>
                <button
                    className="btn btn-danger"
                    onClick={() => handleDelete(user._id)}
                >
                    delete
                </button>
            </th>
        </tr>
    );
};

User.propTypes = {
    user: PropTypes.array.isRequired
};

export default User;
