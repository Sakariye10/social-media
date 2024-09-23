import React from 'react';

const Comment = ({ user, text }) => {
    return (
        <div className="border-b py-2">
            <strong>{user}: </strong>
            <span>{text}</span>
        </div>
    );
};

export default Comment;
