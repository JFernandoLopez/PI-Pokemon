const axios = require('axios')

const { Pokemon } = require('../DB_connection')

const ctrlGetPokemonsByName = async (name) => {
    const dataBPokemons = await Pokemon.findAll();
    const apiLimit = 100;
    let URL = `https://pokeapi.co/api/v2/pokemon?limit=${apiLimit}`;

    let foundPokemon = null;

    do {
        const apiResponse = await axios.get(URL);
        const apiPokemons = apiResponse.data.results;

        const combinedPokemons = [...dataBPokemons, ...apiPokemons];
        foundPokemon = combinedPokemons.find((pokemon) => pokemon.name === name);

        if (!foundPokemon) {
   
            URL = apiResponse.data.next;
        }
    } while (!foundPokemon && URL); 

    if (foundPokemon && foundPokemon.url) {
    
        const apiPokemonResponse = await axios.get(foundPokemon.url);
        const getByName = apiPokemonResponse.data;
        const typeIDs = getByName.types.map((type) => type.type.name);

        const pokemon = {
            id: getByName.id,
            name: getByName.name,
            image: getByName.sprites.other["official-artwork"].front_default,
            hp: getByName.stats[0].base_stat,
            attack: getByName.stats[1].base_stat,
            defense: getByName.stats[2].base_stat,
            speed: getByName.stats[5].base_stat,
            height: getByName.height,
            weight: getByName.weight,
            types: typeIDs,
        };

        return pokemon;
    } 
    if(foundPokemon){
        const getByName = await Pokemon.findOne({where: {name: name}})
        const pokemon = {
            id: getByName.id,
            name: getByName.name,
            image: getByName.image,
            hp: getByName.hp,
            attack: getByName.attack,
            defense: getByName.defense,
            speed: getByName.speed,
            height: getByName.height,
            weight: getByName.weight,
            types: getByName.types,
        };
        return pokemon
    }
    else {
        return null;
    }
}

module.exports = {
    ctrlGetPokemonsByName,
}