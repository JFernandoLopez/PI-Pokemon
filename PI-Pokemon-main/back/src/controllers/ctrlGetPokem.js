const axios = require('axios')

const ctrlGetPokemons = async (URL) => {
    const pokemons = (await axios(`${URL}`)).data.results;
 
    const getPokemon = pokemons.map(async (pokemon) => {
    const bringPokemon = (await axios(pokemon.url)).data;
    const type = await Promise.all(bringPokemon.types.map(async (type) => {
        return type.type.name;
    }))

        return {
        id: bringPokemon.id,
        name: bringPokemon.name,
        image: bringPokemon.sprites.other["official-artwork"].front_default,
        hp: bringPokemon.stats[0].base_stat,
        attack: bringPokemon.stats[1].base_stat,
        defense: bringPokemon.stats[2].base_stat,
        speed: bringPokemon.stats[5].base_stat,
        height: bringPokemon.height,
        weight: bringPokemon.weight,
        type_id: type,
}});

    const pokemonDetails = await Promise.all(getPokemon);

    return pokemonDetails;
}

module.exports = {
    ctrlGetPokemons
};