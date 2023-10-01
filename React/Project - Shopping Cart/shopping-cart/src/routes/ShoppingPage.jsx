import { Col, Row, Card } from 'react-bootstrap';
import AddToCart from "./AddToCart";
import PropTypes from 'prop-types';
import { v4 as uuidv4 } from 'uuid';

export default function ShoppingPage({ 
    products, 
    error, 
    loading, 
    cart, 
    setCart, 
    total,
    setTotal,
    cartQuantity,
    setCartQuantity
  }) {
  
    function createCartObject(item, quantity) {
      return {id: uuidv4(), title: item.title, price: item.price, quantity: quantity}
    }
    
    function handleAddToCart(id, quantity) {
      const itemObj = createCartObject(products[id-1], quantity);
      setCart([
        ...cart,
        itemObj
      ])
      setTotal(total + products[id-1].price * quantity)
      setCartQuantity(cartQuantity + quantity*1)
    }

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
                  <hr />
                  <Card.Text> <strong>Price:</strong> ${item.price}</Card.Text>
                  <AddToCart 
                    id={item.id}
                    addToCart={handleAddToCart}
                  />
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

ShoppingPage.propTypes = {
  products: PropTypes.array,
  cart: PropTypes.array,
  setCart: PropTypes.func,
  total: PropTypes.number,
  setTotal: PropTypes.func,
  error: PropTypes.bool,
  loading: PropTypes.bool,
  cartQuantity: PropTypes.number,
  setCartQuantity: PropTypes.func,
}
