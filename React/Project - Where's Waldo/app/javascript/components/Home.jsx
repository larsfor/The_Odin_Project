import React, { useEffect, useState } from "react";
import { Container, Image, Row, Button } from "react-bootstrap";
import { Logger } from "sass";

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
      setCharacters(data)
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
      box.style.display = 'grid';
    }
    setClicked(!clicked);
  }

  function handleChoice(id, x, y) {
    console.log(id, x, y);
    const c = characters[id-1]
    correctX = c.x > x-25 && c.x < x+25
    correctY = c.y > y-25 && c.y < y+25

    if ( correctX && correctY) {
      alert(`Correct, you have found ${c.name}!`)
    }
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
            left: -25,
            top: -25,
            width: 50,
            height: 50,
            borderStyle: 'dashed',
            maskBorderWidth: "1px",
          }}
        >
          <div 
            id="charMenu"
            style={{
              paddingLeft: "3rem",
            }}
          > 
          { characters.map(item => (
            <div key={item.id}>
              <Button 
                variant="secondary"
                onClick={(() => handleChoice(item.id, boxPosition.x, boxPosition.y))}
              >{item.name}</Button>
            </div>
          )) }
          </div>
        </div>
        <Row>
            <Image src="https://images.firstpost.com/wp-content/uploads/2018/04/Wheres-waldo-wally-google-maps-380.png" rounded />
        </Row>
      </Container>
    </>
  );
}