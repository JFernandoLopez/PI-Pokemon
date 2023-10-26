const axios = require('axios')

const { Pokemon } = require('../DB_connection')

const ctrlGetPokemonsByName = async (name, URL) => {
    const dataBPokemons = await Pokemon.findAll();
        const apiPokemons = (await axios.get(URL)).data.results;

        const bothBases = [...dataBPokemons, ...apiPokemons];
        
        const pokemonSearch = bothBases.filter((pokemon) => pokemon.name === name)
        if(!pokemonSearch[0].url){
            return pokemonSearch
        } else {
            const getByName = (await axios(`${URL}/${name}`)).data;
                const typeIDs = await Promise.all(getByName.types.map(async (type) => {
                    return type.type.name
                }));
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
                        type_id: typeIDs,
                    }
        
                return pokemon};
}

module.exports = {
    ctrlGetPokemonsByName,
}