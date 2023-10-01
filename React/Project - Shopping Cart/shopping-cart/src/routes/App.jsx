import { Outlet, Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

export default function App() {
    return (
      <div className="container">
          <title>Simple Website</title>
          <nav>
              <ul>
                <li><Link to="/">Home page</Link></li>
                <li><Link to="shop">Shopping page</Link></li>
                <li><Link to="cart"><i className="bi bi-cart"></i> Cart</Link></li>

              </ul>
          </nav>
          <Outlet />
      </div>
    );
  }