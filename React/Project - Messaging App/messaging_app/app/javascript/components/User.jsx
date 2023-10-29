import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom'

const User = () => {
    const navigate = useNavigate();
    const [users, setUsers] = useState([])

    useEffect(() => {
        const url = "/api/v1/users/index";
        fetch(url)
        .then((res) => {
            if (res.ok) {
                return res.json();
            }
            throw new Error("Network response was not ok.");
        })
        .then((res) => setUsers(res))
        .catch(() => navigate("/"));
    }, []);

    const allUsers = users.map((user) => (
        <div key={user.id}>
            <Link to={`/users/${user.id}`}>{user.email}</Link>
        </div>
    ));

    const noUsers = (
        <div>No users</div>
    )

    return (
        <>
            { users.length > 0 ? allUsers : noUsers }
        </>
    )
}

export default User;