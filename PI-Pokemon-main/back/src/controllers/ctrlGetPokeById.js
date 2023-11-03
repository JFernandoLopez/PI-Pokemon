const axios = require('axios');
const { Pokemon } = require('../DB_connection');

const ctrlPokemonsById = async(URL, source, id) => {
    const specById = 
        source === "api" 
        ? (await axios(`${URL}/${id}`)).data 
        : await Pokemon.findByPk(id)

    if(source === "api"){
        const typeIDs = await Promise.all(specById.types.map(async (type) => {
            return type.type.name
        }));

            const pokemon = {
                id: specById.id,
                name: specById.name,
                image: specById.sprites.other["official-artwork"].front_default,
                hp: specById.stats[0].base_stat,
                attack: specById.stats[1].base_stat,
                defense: specById.stats[2].base_stat,
                speed: specById.stats[5].base_stat,
                height: specById.height,
                weight: specById.weight,
                types: typeIDs}
                
                return pokemon

    } else {
        return specById
    }
}

module.exports = {
    ctrlPokemonsById
};