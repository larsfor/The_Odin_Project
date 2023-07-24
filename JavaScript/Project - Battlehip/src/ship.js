const Ship = (size) => {
  let hits = 0;
  let coords = [];
  let type = '';
  const getSize = () => size - hits;
  const hit = () => hits += 1;
  const isSunk = () => hits >= size;
  
  return { hit, isSunk, getSize, coords, type }
} 

module.exports = Ship;