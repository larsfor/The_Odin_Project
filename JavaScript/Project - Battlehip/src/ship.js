const Ship = (size) => {
  let hits = 0;
  const hit = () => hits += 1;
  const isSunk = () => hits === size;

  return { hit, isSunk }
} 

let s = Ship(4);

export { Ship };