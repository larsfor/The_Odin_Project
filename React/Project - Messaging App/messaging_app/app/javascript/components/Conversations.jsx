import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom'

const Conversations = () => {
    const navigate = useNavigate();
    const [conversations, setConversations] = useState([])

    useEffect(() => {
        const url = "/api/v1/conversations/index/";
        fetch(url)
        .then((res) => {
            if (res.ok) {
                return res.json();
            }
            throw new Error("Network response was not ok.");
        })
        .then((res) => setConversations(res))
        .catch(() => navigate("/"));
    }, []);

    const allConversations = conversations.map((conversation) => (
        <div key={conversation.id}>
            <Link to={`/conversations/${conversation.id}`}>
                Message { conversation.id }
            </Link>
        </div>
    ));

    const noConversations = (
        <div>No conversations</div>
    )

    return (
        <>
            { conversations.length > 0 ? allConversations : noConversations }
        </>
    )
}

export default Conversations;