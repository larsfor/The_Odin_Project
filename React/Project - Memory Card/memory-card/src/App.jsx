import Cards from './Cards';
import fetchPokemons from './api';
import { useState, useEffect } from 'react';
import './App.css'

export default function App() {
  let pokeIds = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  const [pokeData, setPokeData] = useState([]);

  useEffect(() => {
    fetchPokemons(setPokeData);
  }, [])

  function handleClick(id) {
    console.log(pokeData);
  }

  return (
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
  )
}
