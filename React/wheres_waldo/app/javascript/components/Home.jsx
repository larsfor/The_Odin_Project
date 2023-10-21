import React from "react";
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import { useState } from "react";

export default function Home() {
  const [position, setPosition] = useState({
    x: 0,
    y: 0
  })

  return (
    <>
      <Container
        onPointerMove={e => {
          setPosition({
            x: e.clientX,
            y: e.clientY
          })
        }}
        
        >
        <Row>
            <Image src="https://images.firstpost.com/wp-content/uploads/2018/04/Wheres-waldo-wally-google-maps-380.png" rounded />
        </Row>
      </Container>
    </>
  );
}