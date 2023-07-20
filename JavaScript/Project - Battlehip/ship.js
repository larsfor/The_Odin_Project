const Ship = (size) => {
    let hits = [];
    const hit = () => hits += 1;
    const isSunk = () => hits.length === size;

    return { hit, isSunk }
}

export { Ship };