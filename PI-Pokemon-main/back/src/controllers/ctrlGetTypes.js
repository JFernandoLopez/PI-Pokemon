const axios = require('axios')
const { Type } = require('../DB_connection')

const ctrlGetTypes = async(URL) => {
    const types = (await axios(URL)).data.results;
    const typesT = await Promise.all(types.map(async (type) => {
        await Type.findOrCreate({
            where: {name: type.name}
        })
        return type.name
    }))
    return typesT;
}

module.exports = {
    ctrlGetTypes,
}