import React, { useEffect, useState } from "react";
import { Form, useLoaderData } from "react-router-dom";
import { getConversation, getMessages } from "../components/API";

export async function loader({ params }) {
  const conversation = await getConversation(params.conversationId);
  return { conversation };
}

export default function Conversation() {
  const { conversation } = useLoaderData();
  const [messages, setMessages] = useState([])

  useEffect(() => {
    getMessages(conversation.id, setMessages)
  }, [])

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
      <Form>
          <h1>
            Conversation with: 
          </h1>
        <hr />
        <div className="messageWindow">
          <Messages />
        </div>
        <div className="messageBox">
          <textarea cols="50" rows="3"></textarea>
        </div>
        <div className="messageButton">
          <button >
            Send message
          </button>
        </div>
      </Form>
    </div>
  )
}