const Ship = (size) => {
  let hits = 0;
  const getSize = () => size - hits;
  const hit = () => hits += 1;
  const isSunk = () => hits >= size;
  
  return { hit, isSunk, getSize }
} 

module.exports = Ship;