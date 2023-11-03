const { ctrlGetTypes } = require('../controllers/ctrlGetTypes')

const getTypes = async(req, res) => {
    const URL = 'https://pokeapi.co/api/v2/type';
    try {
        const types = await ctrlGetTypes(URL)
        return res.status(201).json(types)
    } catch (error) {
        console.log(error)
        return res.status(404).json({error:"type couldn't be obtained" })
    }

}

module.exports = {
    getTypes,
}