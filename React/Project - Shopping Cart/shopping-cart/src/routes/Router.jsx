import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import ShoppingPage from "./ShoppingPage";
import ErrorPage from "./ErrorPage";
import HomePage from "./HomePage";
import Cart from "./Cart";
import { useEffect, useState } from "react";

export default function Router() {

  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products?limit=10', { mode: "cors" })
      .then((response) => {
        if (response.status >= 400) {
          throw new Error('Server error');
        }
        return response.json();
      })
      .then((response) => setProducts(response))
      .catch((error) => setError(error))
      .finally(() => setLoading(false))
  }, [])

    const router = createBrowserRouter([
      {
        path: "/",
        element: <App />,
        errorElement: <ErrorPage />,
        children: [
          {index: true, element: <HomePage />},
          {path: "/shop", element: <ShoppingPage 
            products={products}
            error={error}
            loading={loading}
            cart={cart}
            setCart={setCart}
            total={total}
            setTotal={setTotal}
          />},
          {path: "/cart", element: <Cart
            cart={cart}
            total={total}
          />},
        ]
      },
    ])

    return <RouterProvider router={router} />;
}
