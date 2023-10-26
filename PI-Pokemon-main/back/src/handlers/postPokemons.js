const { ctrlpostPokemon } = require('../controllers/ctrlPostPoke')

const postPokemon = async (req, res) => {
    const {name, image, hp, attack, defense, speed, height, weight, types} = req.body;
    try {
        const pokemon = await ctrlpostPokemon(name, image, hp, attack, defense, speed, height, weight, types)
        return res.status(201).json(pokemon)
    } catch (error) {
        return res.status(404).json({error: 'Theres not enought pokemos for us yet'})
    }
}

module.exports = {
    postPokemon,
};