export default function General() {

  return (
    <div>
      <h3>General information:</h3>
      <div className="container">
        <div>
          <label htmlFor="name">Name</label>
          <input type="text" placeholder="Your name" />
        </div>
        
        <div>
          <label htmlFor="email">Email</label>
          <input type="email" placeholder="Your email" />
        </div>

        <div>
          <label htmlFor="phone">Phone</label>
          <input type="tel" placeholder="Your phone number" />
        </div>
      </div>
    </div>
  )
}