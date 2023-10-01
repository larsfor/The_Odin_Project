import PropTypes from 'prop-types';

export default function Cart({ cart, total }) {
    if ( cart.length < 1 ) return <h1>No items in cart</h1>

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
      <button type="button" className="btn btn-success">Purchase</button>
      </>
    )
}

Cart.propTypes = {
  cart: PropTypes.array,
  total: PropTypes.number,
}