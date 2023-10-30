import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "../components/Home";
import ErrorPage from "../components/ErrorPage";
import Conversation, { loader as conversationLoader } from "../components/Conversation";
import { getConversations } from "../components/API"

export async function conversationsLoader() {
  const conversations = await getConversations();
  return { conversations }
}

const Router = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
      errorElement: <ErrorPage />,
      loader: conversationsLoader,
      children: [
        {
          path: "conversations/:conversationId",
          element: <Conversation />,
          loader: conversationLoader
        },
      ],
    },
  ]);

  return(
      <RouterProvider router={router} />
  ) 
};

export default Router;