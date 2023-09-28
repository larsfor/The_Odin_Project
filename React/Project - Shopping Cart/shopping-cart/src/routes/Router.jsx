import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import ShoppingPage from "./ShoppingPage";
import ErrorPage from "./ErrorPage";

export default function Router() {
    const router = createBrowserRouter([
      {
          path: "/",
          element: <App />,
          errorElement: <ErrorPage />,
      },
      {
        //   path: "/shop/:id",
          path: "/shop",
          element: <ShoppingPage />,
      }
    ])

    return <RouterProvider router={router} />;
}
