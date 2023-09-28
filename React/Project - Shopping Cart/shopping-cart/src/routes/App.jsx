import { Link } from "react-router-dom";

export default function App() {
    return (
      <div className="container">
        <head>
            <title>Simple Website</title>
        </head>
          <nav>
              <ul>
                <li><Link to="/">Home page</Link></li>
                <li><Link to="shop">Shopping Cart</Link></li>
              </ul>
          </nav>

          <header>
            <h1>Welcome to My Website</h1>
          </header>

          <main>
          <section>
            <h2>About</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac nisl eget nunc aliquam malesuada. Nulla facilisi. Donec ut semper metus.</p>
          </section>

          <section>
            <h2>Gallery</h2>
            <div className="image-gallery">
              {/* Random images */}
              <img src="https://source.unsplash.com/random/400x300" alt="Random Image 1" />
              <img src="https://source.unsplash.com/random/400x300" alt="Random Image 2" />
              <img src="https://source.unsplash.com/random/400x300" alt="Random Image 3" />
            </div>
          </section>

          <section>
            <h2>Contact</h2>
            <form action="#">
              {/* Your contact form fields */}
              <label htmlFor="name">Name:</label>
              <input type="text" id="name" name="name" />

              <label htmlFor="email">Email:</label>
              <input type="email" id="email" name="email" />

              <label htmlFor="message">Message:</label>
              <textarea id="message" name="message"></textarea>

              <button type="submit">Send Message</button>
            </form>
          </section>
        </main>

        <footer>
          &copy; {new Date().getFullYear()} Your Website
        </footer>
      </div>
    );
  }