const { ctrlPokemonsById } = require('../controllers/ctrlGetPokeById')

const getPokemonsById = async (req, res) => {
    const URL = 'https://pokeapi.co/api/v2/pokemon';
    const {id} = req.params;
    const source = isNaN(id) ? "bdd" : "api"; 
    if(!id) throw new Error("Missing id")
    try {
        const pokemon = await ctrlPokemonsById(URL, source, id)
        return res.status(201).json(pokemon)
    } catch (error) {
        return res.status(404).json({error: 'Theres not enought pokemos for us yet'})
    }
}

module.exports = {
    getPokemonsById
};