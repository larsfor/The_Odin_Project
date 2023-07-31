const Player = (name) => {
    let attacks = [];
    let computer = false;
    const ID = 0;
 
    // If computer is true, then the computer chooses a random coordinate
    const attack = () => {
        while (true) {
            let x = Math.floor(Math.random() * 10);
            let y = Math.floor(Math.random() * 10);

            const a = JSON.stringify(attacks);
            const b = JSON.stringify([x, y]);
            const taken = a.indexOf(b);

            // Check if the attack has been picked previously (1)
            // If not (-1), add it to the attack array and return the coordinates
            if ( taken === -1 ) {
                attacks.push([x, y])
                return [x, y]
            };

            return false;
        }
    }
    
    return { attack, name, computer }
}

module.exports = Player;

// let p = Player('Geir');
// console.log(p.attack());
