const { ctrlGetPokemonsByName } = require('../controllers/ctrlGetPokeByName')

const getPokemonsByName = async (req, res) => {
    const name = req.query.name.toLowerCase();
    const URL = "https://pokeapi.co/api/v2/pokemon?limit=100";
    try {
        const pokemon = await ctrlGetPokemonsByName(name, URL)
        return res.status(201).json(pokemon)
    } catch (error) {
        return res.status(404).json(error)
    }
}
    
// return res.status(404).json({error: 'there is no pokemons with that name'})

module.exports = {
    getPokemonsByName,
}