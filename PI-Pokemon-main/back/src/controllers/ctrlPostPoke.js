const { Pokemon } = require('../DB_connection');
const axios = require('axios')

const ctrlpostPokemon = async (name, image, hp, attack, defense, speed, height, weight, types) => {
    const newPokemon = await Pokemon.findOrCreate({ where: {name, image, hp, attack, defense, speed, height, weight, types}})
    return newPokemon
}

module.exports = {
    ctrlpostPokemon,
}