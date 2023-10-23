import React, { useEffect } from "react";
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import { useState } from "react";

export default function Home() {
  const [position, setPosition] = useState({
    x: 0,
    y: 0
  });
  const [clicked, setClicked] = useState(false);
  const [boxPosition, setBoxPosition] = useState({
    x: 0,
    y: 0
  });
  const [characters, setCharacters] = useState([])

  useEffect(() => {
    fetch('/api/v1/characters')
    .then(response => {
      if (response.ok) {
        return response.json();
      }
      console.log('error');
      throw response
    })
    .then(data => {
      setCharacters({
        ...characters,
        data
      })
    })
    .catch(error => {
      console.log("Error feching data: ", error);
    })
  }, []) 

  function handleClick() {
    setBoxPosition({
      x: position.x,
      y: position.y
    })
    const box = document.getElementById("targetBox");
    if (clicked) {
      box.style.display = 'none';
    } else if (!clicked) {
      box.style.display = 'block';
    }
    setClicked(!clicked);
  }



  return (
    <>
      <Container
        onPointerMove={e => {
          setPosition({
            x: e.clientX,
            y: e.clientY
          })
        }}
        
        onClick={handleClick}
        >

        <div 
          id="targetBox"
          style={{
            display: 'none',
            position: 'absolute',
            transform: `translate(${boxPosition.x}px, ${boxPosition.y}px)`,
            left: -20,
            top: -20,
            width: 40,
            height: 40,
            borderStyle: 'dashed',
            maskBorderWidth: "1px"
          }}
        >

        </div>
        <Row>
            <Image src="https://images.firstpost.com/wp-content/uploads/2018/04/Wheres-waldo-wally-google-maps-380.png" rounded />
        </Row>
      </Container>
    </>
  );
}