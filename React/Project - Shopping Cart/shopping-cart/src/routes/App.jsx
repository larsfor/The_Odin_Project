import { Outlet, Link } from "react-router-dom";

export default function App() {
    return (
      <div className="container">
            <title>Simple Website</title>
          <nav>
              <ul>
                <li><Link to="/">Home page</Link></li>
                <li><Link to="shop">Shopping cart</Link></li>
              </ul>
          </nav>
          <Outlet />
      </div>
    );
  }