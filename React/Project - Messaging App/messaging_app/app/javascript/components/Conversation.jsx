import React from "react";
import { Form } from "react-router-dom";

export default function Conversation() {
  return(
    <div className="messageContainer">
      <Form>
          <h1>
            Conversation with: 
          </h1>
        <hr />
        <div className="messageWindow">
          test
        </div>
        <textarea name="messageBox" id="" cols="40" rows="3"></textarea>
        <button className="messageButton">
          Send message
        </button>
      </Form>
    </div>
  )
}