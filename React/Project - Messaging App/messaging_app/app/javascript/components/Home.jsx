import React, { useEffect, useState } from "react";
import { Outlet, Form, useLoaderData, Link } from "react-router-dom";
import { getCuid } from "../components/API";


export default function Home() {
  const { conversations } = useLoaderData();
  const [cuid, setCuid] = useState(null);

  useEffect(() => {
    getCuid(setCuid);
  })

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
                  Conversation { conversation.id }
                </Link>
              ))}
            </li>
          </ul>
        </nav>

        <main>
          <Outlet />
        </main>

        <aside>
          <Link to={`/users/${cuid}`}>
              <button>
                Profile
              </button>
            </Link>
        </aside>

        <footer>
        </footer>
      </div>
  );
}