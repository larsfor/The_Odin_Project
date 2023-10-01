import PropTypes from 'prop-types';
import { useState } from 'react';

export default function AddToCart({ id, addToCart }) {
    const [quantity, setQuantity] = useState(0)

    function handleReset() {
      setQuantity(0);
      addToCart(id, quantity);
    }

    return(
      <form id={"myForm_"+id} onSubmit={e => e.preventDefault()}>
        <div className="input-group input-group-sm mb-3">
          <input onChange={(e) => setQuantity(e.target.value)} value={quantity} min={1} max={999} type="number" className="form-control" aria-label="Purchase quantity" aria-describedby="inputGroup-sizing-sm"/>
          <span onClick={handleReset} type="submit" className="btn btn-outline-secondary" id="button-addon">Add to cart
          </span>
        </div>
      </form>
    )
}

AddToCart.propTypes = {
  addToCart: PropTypes.func,
  id: PropTypes.number
}
