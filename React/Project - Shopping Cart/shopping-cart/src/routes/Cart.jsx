import PropTypes from 'prop-types';
import BuyButton from './BuyButton';

export default function Cart({ cart, total, setCart, setCartQuantity }) {
  if ( cart.length < 1 ) return <h1>No items in cart</h1>

  function handlePurchase() {
    setCart([]);
    setCartQuantity(0);
  }
  
  return(
    <>
    <h1>Your cart:</h1>
    <hr />
    <table className="table">
      <thead>
        <tr>
          <th scope="col">Item</th>
          <th scope="col">Quantity</th>
          <th scope="col">Price</th>
        </tr>
      </thead>
      <tbody>
      { cart.map(item => (
        <tr key={item.id}>
          <td>{item.title}</td>
          <td>{item.quantity}</td>
          <td>${item.price}</td>
        </tr>
      ))}
      <tr>
        <th className="table-active" colSpan={2} scope="row">Total</th>
        <th className="table-active">${total}</th>
      </tr>
      </tbody>
    </table>
    <div className="d-flex justify-content-end">
      <BuyButton 
        onPurchase={handlePurchase}
      />
    </div>
    </>
  )
}

Cart.propTypes = {
  cart: PropTypes.array,
  total: PropTypes.number,
  setCart: PropTypes.func,
  setCartQuantity: PropTypes.func,
}