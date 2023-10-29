import React, { createContext } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "../components/Home";
import ErrorPage from "../components/ErrorPage";
import Conversation from "../components/Conversation";


const Router = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
      errorElement: <ErrorPage />,
      children: [
        {
          path: "conversations/:conversationId",
          element: <Conversation />
        },
      ],
    },
  ]);

  return(
      <RouterProvider router={router} />
  ) 
};

export default Router;