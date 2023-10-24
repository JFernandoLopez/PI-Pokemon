const axios = require('axios')

const URL = 'https://pokeapi.co/api/v2/pokemon'


const getPokemons = async (req, res) => {
    try{
        const pokemons = (await axios(`${URL}`)).data.results;
     
        const getPokemon = pokemons.map(async (pokemon) => {
        const bringPokemon = (await axios(pokemon.url)).data;
        const typeIDs = await Promise.all(bringPokemon.types.map(async (type) => {
            const typeData = (await axios(type.type.url)).data;
            return typeData.id;
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
            type_id: typeIDs,
    }});

        const pokemonDetails = await Promise.all(getPokemon);

        return res.status(200).json(pokemonDetails);

    } catch(error){
        return res.status(404).json(error)
    }
};

module.exports = {
    getPokemons
};