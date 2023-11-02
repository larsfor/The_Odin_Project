import React, { useEffect, useRef, useState } from "react";
import { Form, useLoaderData } from "react-router-dom";
import { getConversation, getMessages, createMessage, getCuid, getUsers } from "../components/API";
import RightMessage from "./RightMessage";
import LeftMessage from "./LeftMessage";

export async function loader({ params }) {
  const conversation = await getConversation(params.conversationId);
  return { conversation };
}

export default function Conversation() {
  const { conversation } = useLoaderData();
  const [messages, setMessages] = useState([]);
  const [message, setMessage] = useState('');
  const [cuid, setCuid] = useState(null);
  const [users, setUsers] = useState();

  useEffect(() => {
    getMessages(conversation.id, setMessages)
    getCuid(setCuid);
    getUsers(setUsers);
  }, []);

  // console.log(users);

  function handleSubmit(e) {
    e.preventDefault();
    if ( message.length < 1 ) {
      console.log("Can't have empty messages.");
      return;
    }
    createMessage(message, conversation.id);
    setMessage('');

    getMessages(conversation.id, setMessages);
  }

  function ScrollToBottom() {
    const elementRef = useRef();
    useEffect(() => elementRef.current.scrollIntoView());
    return <div ref={elementRef} />
  }

  function Messages() {
    return(
      <div>
        { !messages ? (
          <div>Loading...</div>
        ) : messages.length > 0 ? (
          <div>
            { messages.map((message) => {
              if (message.sender_id === cuid) {
                return (
                  <div key={message.id} className="rightContainer">
                    <RightMessage message={message} />
                  </div>
                )
              } else {
                return(
                  <div key={message.id} className="leftContainer">
                  <LeftMessage message={message}/>
                </div>
                )
              }
            }) }
          </div>
        ) : (
          <div>There are no messages at the moment!</div>
        )}        
      <ScrollToBottom />
      </div>
    )
  };

  return(
    <div className="messageContainer">
      <Form onSubmit={handleSubmit}>
          <h2>
            Conversation with:
            </h2>
            <h3>
          { !users ? (
          <div>Loading...</div>
        ) : users.length > 0 ? (
          <div>
            { users.map((user) => {
                return (
                  ""+user.name+" | "
                )
            }) }
          </div>
        ) : (
          <div>There are no users at the moment!</div>
        )}   
            </h3>
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