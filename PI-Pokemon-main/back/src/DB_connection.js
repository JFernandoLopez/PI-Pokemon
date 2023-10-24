require('dotenv').config();
const { Sequelize } = require('sequelize');
const { DB_USER, DB_HOST, DB_PASSWORD } = process.env;
const PokemonModel = require('./models/Pokemon');
const TypeModel = require('./models/Type')



const sequelize = new Sequelize(`postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/pokemon`, 
    {logging: false, native: false}
);

PokemonModel(sequelize);

TypeModel(sequelize);


const { Pokemon, Type } = sequelize.models;

Pokemon.belongsToMany(Type, { through: "pokemon_type" });
Type.belongsToMany(Pokemon, { through: "pokemon_type" })


module.exports = {
    Pokemon,
    Type,
    sequelize
}