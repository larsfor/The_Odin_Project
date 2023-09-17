const img = document.getElementById('pokeImages');

async function getPokemons() {
    let pokeId = 1;
    const reponse = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokeId}`);
    const pokeData = await reponse.json();
    const pokeUrl = pokeData.sprites.other['official-artwork'].front_default;
    img.src = pokeUrl;
}

getPokemons();