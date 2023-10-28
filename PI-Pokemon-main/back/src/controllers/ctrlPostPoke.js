const { Pokemon } = require('../DB_connection');
const { Type } = require('../DB_connection')
const axios = require('axios')

const ctrlpostPokemon = async (name, image, hp, attack, defense, speed, height, weight, types) => {
    const [newPokemon, created] = await Pokemon.findOrCreate({ where: {name, image, hp, attack, defense, speed, height, weight, types}})
    if (created) {
        await Promise.all(types.map(async (type) => {
            const newType = await Type.findOne({ where: { name: type } });
            await newPokemon.addType(newType)}));
        return newPokemon;
    } else {
        return null;
    }
}

module.exports = {
    ctrlpostPokemon,
}