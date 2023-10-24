const axios = require('axios');

const URL = 'https://pokeapi.co/api/v2/pokemon';

const getPokemonsById = async (req, res) => {
    const {id} = req.params;
    try {
        const specById = (await axios(`${URL}/${id}`)).data
        const typeIDs = await Promise.all(specById.types.map(async (type) => {
            const typeData = (await axios(type.type.url)).data;
            return typeData.id
        }));

        if(specById.id){
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
                type_id: typeIDs,
            }

            return res.status(201).json(pokemon);
        }

    } catch (error) {
        res.status(404).json({error: 'Theres not enought pokemos for us yet'});
    }
}

module.exports = {
    getPokemonsById
};