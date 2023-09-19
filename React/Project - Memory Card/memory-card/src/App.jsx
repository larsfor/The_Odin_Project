import Cards from './Cards';
import Scoreboard from './Scoreboard/';
import fetchPokemons from './api';
import { useState, useEffect } from 'react';
import './App.css'

export default function App() {
  const [pokeData, setPokeData] = useState([]);
  const [currentScore, setCurrentScore] = useState(0);
  const [highScore, setHighScore] = useState(0);

  useEffect(() => {
    fetchPokemons(setPokeData);
  }, [])

  useEffect(() => {
    if ( currentScore > highScore ) {
      setHighScore(currentScore);
    }
  }, [currentScore, highScore])

  function handleClick(id) {
    pokeData.map(item => {
      if ( item.id === id ) {
        if ( !item.clicked ) {
          setCurrentScore(currentScore + 1);
        } else {
          setCurrentScore(0);
        }
      }
    })

    setPokeData(pokeData.map(item => {
      if (item.id === id) {
        return {
          ...item,
          clicked: true,
        };
      } else {
        return item;
      }
    }))
  }

  return (
    <>
      <Scoreboard 
        currentScore={currentScore}
        highScore={highScore}
      />
      <div className='grid-container'>
        { pokeData.map(item => (
          <div key={item.id}>
            <Cards
              id={item.id}
              url={item.url}
              onClick={handleClick} 
            />
          </div>
        ))}
      </div>
    </>
  )
}
