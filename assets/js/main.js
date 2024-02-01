function convertPokemonToLi(pokemon) {
    return `
    <li class="pokemon">
        <span class="number">#001</span>
        <span class="name">${pokemon.name}</span>

        <div class="detail">
            <ol class="types">
                <li class="type">grass</li>
                <li class="type">poison</li>
            </ol>

            <img src=""
                 alt="${pokemon.name}">
        </div>
    </li>
`
}

const pokemonList = document.getElementById('pokemonList');


pokeApi.getPokemons().then((pokemons = []) => {
    pokemonList.innerHTML += pokemons.map(convertPokemonToLi).join('')
})

//map = método for para arrays com parametro para executar algo ex: arrows func,
//leia a documentação da mozilla para entender melhor!
//join = prepara uma string ou concatena varias strings e separa depois com um
//caracter especial (se configura no parametro) ex: 
    // const newHtml = pokemons.map(convertPokemonToList).join('')
    // pokemonList.innerHTML = newHtml

//for (let i = 0; i < pokemons.length; i++) {
//    const pokemon = pokemons[i];
//    pokemonList.innerHTML += convertPokemonToLi(pokemon)
//    listItems.push(convertPokemonToLi(pokemon))
//}


//cada then se conecta um com o outro, quando você passa um return ou usa
//arrow function, ele passa pro parametro de entrada do próximo then