// const { ctrlGetTypes } = require('../controllers/ctrlGetTypes')

const ctrlGetTypes = async(URL) => {
    const type = (await axios(URL)).data.results;
    return 
}

const getTypes = async(req, res) => {
    const URL = 'https://pokeapi.co/api/v2/type';
    try {
        const type = await ctrlGetTypes(URL)
        return res.status(201).json(type)
    } catch (error) {
        return res.status(404).json({error:"type couldn't be obtained" })
    }

}

module.exports = {
    getTypes,
}