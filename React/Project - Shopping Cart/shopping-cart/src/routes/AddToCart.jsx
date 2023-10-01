import PropTypes from 'prop-types';

export default function AddToCart({ onClick }) {
    return(
      <form id="myForm" method="">
        <div className="input-group input-group-sm mb-3">
          <input type="text" className="form-control" aria-label="Purchase quantity" aria-describedby="inputGroup-sizing-sm"/>
          <span onClick={onClick} type="submit" className="btn btn-outline-secondary" id="button-addon">Button</span>
        </div>
      </form>
    )
}

AddToCart.propTypes = {
  onClick: PropTypes.func
}
