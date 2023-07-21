export const ship = (length) => {
    let hits = 0;
    function hit() { hits += 1; }
    function isSunk() { hits == length };

    return ( hit, isSunk )
  };