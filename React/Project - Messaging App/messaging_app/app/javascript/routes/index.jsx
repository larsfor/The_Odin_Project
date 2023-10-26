import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "../components/Home";


const Router = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
      // errorElement: <ErrorPage />,
    },
    // {
    //   path: "profile/:name",
    //   element: <Profile />,
    // },
  ]);

  return <RouterProvider router={router} />;
};

export default Router;