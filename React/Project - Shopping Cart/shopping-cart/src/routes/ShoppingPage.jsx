import { useEffect, useState } from "react"
import { Col, Row, Card } from 'react-bootstrap';


export default function ShoppingPage() {

    const [products, setProducts] = useState([])
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(true)

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

    if (error) return <p>A network error was encountered</p>;
    if (loading) return <p>Loading</p>;

    return(
        <>
        <Row xs={2} md={3} className="g-4">
          { products.map(item => (
            <Col key={item.id}>
              <Card>
                <Card.Img variant="top" src={item.image} />
                <Card.Header>
                  <small className="text-muted">Price: <strong>${item.price}</strong></small>
                </Card.Header>
                <Card.Body>
                  <Card.Title>{item.title}</Card.Title>
                  <Card.Text> <strong>Category:</strong>  {item.category}</Card.Text>
                  <Card.Text> <strong>Description</strong> {item.description}</Card.Text>
                </Card.Body>
                <Card.Footer>
                  <small className="text-muted">Rating: {item.rating.rate} </small>
                  <small className="text-muted">Votes: {item.rating.count} </small>
                </Card.Footer>
              </Card>
              </Col>
          ))}
        </Row>
      </>
    )
}