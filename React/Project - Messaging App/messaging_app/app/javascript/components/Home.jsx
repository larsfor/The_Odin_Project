import React from "react";
import { Outlet } from "react-router-dom";
import Conversations from "./Conversations";
import { Form } from "react-router-dom";

export default function Root() {
  return (
    <>
    <div className="container">
      <header>

      </header>

      <nav>
        <Form id="newMessage">
          <button type="submit">New</button>
        </Form>
        <hr />
        <ul>
          <li>
            <Conversations />
          </li>
        </ul>
      </nav>

      <main>
        <Outlet />
      </main>

      <aside>
      </aside>

      <footer>
      </footer>
    </div>
    </>
  );
}