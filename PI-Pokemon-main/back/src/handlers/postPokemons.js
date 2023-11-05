const { ctrlpostPokemon } = require('../controllers/ctrlPostPoke')

const postPokemon = async (req, res) => {
    const {name, image, hp, attack, defense, speed, height, weight, types} = req.body;
    if(!name || !image || !hp || !attack || !defense || !speed || !height || !weight || !types) throw new Error("Missing data")
    try {
        const pokemon = await ctrlpostPokemon(name, image, hp, attack, defense, speed, height, weight, types)
        return res.status(201).json(pokemon)
    } catch (error) {
        console.log(error)
        return res.status(404).json({error: 'Theres a problem, we ara looking for a solution'})
    }
}

module.exports = {
    postPokemon,
};