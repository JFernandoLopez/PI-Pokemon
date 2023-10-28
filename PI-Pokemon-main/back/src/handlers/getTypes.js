// const { ctrlGetTypes } = require('../controllers/ctrlGetTypes')
const axios = require('axios')
const { Type } = require('../DB_connection')

const ctrlGetTypes = async(URL) => {
    const type = (await axios(URL)).data.results;
    const types = await Promise.all(type.map(async (type) => {
        await Type.findOrCreate({
            where: {name: type.name}
        })
        return type.name
    }))
    return types
}

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