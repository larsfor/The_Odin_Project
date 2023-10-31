import React, { useEffect, useState } from "react";
import { Form, useLoaderData } from "react-router-dom";
import { getConversation, getMessages, createMessage } from "../components/API";

export async function loader({ params }) {
  const conversation = await getConversation(params.conversationId);
  return { conversation };
}

export default function Conversation() {
  const { conversation } = useLoaderData();
  const [messages, setMessages] = useState([])
  const [message, setMessage] = useState('');

  useEffect(() => {
    getMessages(conversation.id, setMessages)
  }, [])

  function handleSubmit(e) {
    e.preventDefault();
    if ( message.length < 1 ) {
      console.log("Can't have empty messages.");
      return;
    }
    createMessage(message, conversation.id)
    .then((data) => console.log('data', data))
    .catch((error) => console.log('error', error))
    setMessage('');
  }

  function Messages() {
    return(
      <>
        { !messages ? (
          <div>Loading...</div>
        ) : messages.length > 0 ? (
          <div>
            { messages.map((message) => {
              if (message.sender_id === conversation.starter_id) {
                return <div key={message.id}>Starter</div>
              } else {
                return <div key={message.id}>Participater</div>
              }
            }) }
          </div>
        ) : (
          <div>There are no messages at the moment!</div>
        )}        
      </>
    )
  }


  return(
    <div className="messageContainer">
      <Form onSubmit={handleSubmit}>
          <h1>
            Conversation with: 
          </h1>
        <hr />
        <div className="messageWindow">
          <Messages />
        </div>
        <div className="messageBox">
          <textarea 
            cols="40"
            rows="3"
            type="text"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          ></textarea>
        </div>
        <div className="messageButton">
          <button type="submit">
            Send message
          </button>
        </div>
      </Form>
    </div>
  )
}