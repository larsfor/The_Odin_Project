import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import PropTypes from 'prop-types';

export default function BuyButton({ onPurchase }) {
  const [show, setShow] = useState(false);
  const handleClose = () => { 
    setShow(false);
    onPurchase();
  }
  const handleShow = () => setShow(true);

  return(
    <>  
      <Button variant="success" onClick={handleShow}>
        Purchase
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Thanks for your purchse</Modal.Title>
        </Modal.Header>
        <Modal.Body>You have now purchased your items, and they are on their way!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

BuyButton.propTypes = {
  onPurchase: PropTypes.func,
}