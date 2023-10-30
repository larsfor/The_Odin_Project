import React from "react";
import { Outlet, Form, useLoaderData, Link } from "react-router-dom";

export default function Home() {
  const { conversations } = useLoaderData();

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
              { conversations.map((conversation) => (
                <Link key={conversation.id} to={`/conversations/${conversation.id}`}>
                  Conversation
                </Link>
              ))}
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
  );
}