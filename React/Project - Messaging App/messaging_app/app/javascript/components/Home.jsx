import React, { createContext } from "react";
import Conversations from "./Conversations";
import { Outlet, Form } from "react-router-dom";

export const ShopContext = createContext({
  conversations: [],
  messages: [],
});

export default function Home() {
  const conversations = 1;
  const messages = 2;

  return (
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
        <ShopContext.Provider value={{ conversations, messages }}>
          <Outlet />
        </ShopContext.Provider>
      </main>

      <aside>
      </aside>

      <footer>
      </footer>
    </div>
  );
}