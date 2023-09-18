export default function fetchPokemons(setPokeData) {
    getData(setPokeData);
}

function createPokemonObject(id, url) {
    return {id: id, url: url, clicked: false}
}

async function getData(setPokeData) {
    const numberOfPokes = 13;
    try {
        const pokeObjects = [];
        for (let id = 1; id < numberOfPokes; id++) {
            const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`, {mode: 'cors'});
            const pokeData = await response.json();
            const pokeURL = pokeData.sprites.other['official-artwork'].front_default;            
            pokeObjects.push(createPokemonObject(id, pokeURL));
        }

        setPokeData(pokeObjects);
    } catch (error) {
        console.log(error);
    }
}