const {ctrlGetPokemons} = require('../controllers/ctrlGetPokem')

const getPokemons = async (req, res) => {
    const URL = 'https://pokeapi.co/api/v2/pokemon'
    try {
        const pokemons = await ctrlGetPokemons(URL)
        return res.status(200).json(pokemons)
    } catch (error) {
        console.log(error)
        return res.status(404).json('Something happens')
    }
};

module.exports = {
    getPokemons
};