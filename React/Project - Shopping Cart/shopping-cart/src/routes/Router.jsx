import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import ShoppingPage from "./ShoppingPage";
import ErrorPage from "./ErrorPage";
import HomePage from "./HomePage";
import Cart from "./Cart";

export default function Router() {
    const router = createBrowserRouter([
      {
        path: "/",
        element: <App />,
        errorElement: <ErrorPage />,
        children: [
          {index: true, element: <HomePage />},
          {path: "/shop", element: <ShoppingPage />},
          {path: "/cart", element: <Cart />},
        ]
      },
    ])

    return <RouterProvider router={router} />;
}
