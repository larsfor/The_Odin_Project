import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import ShoppingPage from "./ShoppingPage";
import ErrorPage from "./ErrorPage";
import HomePage from "./HomePage";

export default function Router() {
    const router = createBrowserRouter([
      {
        path: "/",
        element: <App />,
        errorElement: <ErrorPage />,
        children: [
          {index: true, element: <HomePage />},
          {path: "/shop", element: <ShoppingPage />},
        ]
      },
    ])

    return <RouterProvider router={router} />;
}
