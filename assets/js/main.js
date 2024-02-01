
const pokemonList = document.getElementById('pokemonList')
const loadMoreButton = document.getElementById('loadMoreButton')

const maxRecords = 151
const limit = 10
let offset = 0;

function convertPokemonToLi(pokemon) {
    return `
        <li class="pokemon ${pokemon.type}">
            <span class="number">#${pokemon.number}</span>
            <span class="name">${pokemon.name}</span>

            <div class="detail">
                <ol class="types">
                    ${pokemon.types.map((type) => `<li class="type ${type}">${type}</li>`).join('')}
                </ol>

                <img src="${pokemon.photo}"
                     alt="${pokemon.name}">
            </div>
        </li>
    `
}

function loadPokemonItens(offset, limit) {
    pokeApi.getPokemons(offset, limit).then((pokemons = []) => {
        const newHtml = pokemons.map(convertPokemonToLi).join('')
        pokemonList.innerHTML += newHtml
    })
}

loadPokemonItens(offset, limit)

loadMoreButton.addEventListener('click', () => {
    offset += limit
    const qtdRecordsWithNexPage = offset + limit

    if (qtdRecordsWithNexPage >= maxRecords) {
        const newLimit = maxRecords - offset
        loadPokemonItens(offset, newLimit)

        loadMoreButton.parentElement.removeChild(loadMoreButton)
    } else {
        loadPokemonItens(offset, limit)
    }
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
