const Gameboard = () => {
    let board = Array.from(Array(10), () => new Array(10).fill(0));
    let missed = []

    const receiveAttack = ((x, y) => {
        if (board[x][y] != 0) {
            console.log('hit');
        } else {
            missed.push([x, y]);
        }
    })

    return { board, receiveAttack }
}

let b = Gameboard();
b.receiveAttack(0, 1);

// export { Gameboard };