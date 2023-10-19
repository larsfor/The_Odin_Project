import React from "react";
import { Link } from "react-router-dom";
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';

export default function Home() {
  return (
    <Container>
      <Row>
          <Image src="https://images6.alphacoders.com/925/925904.jpg" rounded />
      </Row>
    </Container>
  );
}