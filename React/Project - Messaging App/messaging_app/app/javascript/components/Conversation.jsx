import React, { useContext } from "react";
import { Form } from "react-router-dom";
import { ShopContext } from './Home';

export default function Conversation() {
  const { conversations, messages } = useContext(ShopContext);

  return(
    <div className="messageContainer">
      <Form>
          <h1>
            Conversation with: 
          </h1>
        <hr />
        <div className="messageWindow">
          test
          {conversations}
          {messages}
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