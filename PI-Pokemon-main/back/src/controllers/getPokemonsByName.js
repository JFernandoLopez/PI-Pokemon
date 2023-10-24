const axios = require('axios')

URL = 'https://pokeapi.co/api/v2/pokemon';

const getPokemonsByName = async (req, res) => {
    const { name } = req.params;
    try {
        const getByName = (await axios(`${URL}/${name}`)).data
        const typeIDs = await Promise.all(getByName.types.map(async (type) => {
            const typeData = (await axios(type.type.url)).data;
            return typeData.id
        }));

        if(getByName.name){
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

            return res.status(201).json(pokemon);
        }

    } catch (error) {
        
    }
}

module.exports = {
    getPokemonsByName,
}