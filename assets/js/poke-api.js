const pokeApi = {}

//Aqui chama o nome dos pokemons e a sua URL
pokeApi.getPokemons = (offset = 0, limit = 10) => {
    
    const url = `https://pokeapi.co/api/v2/ability/?limit=${limit}&offset=${offset}`
    
    return fetch(url)
        .then((response) => response.json())
        .then((jsonBody) => jsonBody.results)
}

//arrays de promises -aqui está os detalhes
Promise.all([
    fetch('https://pokeapi.co/api/v2/pokemon/1'),
    fetch('https://pokeapi.co/api/v2/pokemon/1'),
    fetch('https://pokeapi.co/api/v2/pokemon/1'),
    fetch('https://pokeapi.co/api/v2/pokemon/1')
]).then(results => {
    console.log(results)
})