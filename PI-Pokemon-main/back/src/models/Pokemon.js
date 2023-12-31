const { DataTypes, ARRAY } = require("sequelize");
const Type = require("./Type");

module.exports = (sequilize) => {
    sequilize.define('Pokemon', {
        id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            allowNull: false,
            primaryKey: true,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
            
        },
        image: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        hp: {
            type: DataTypes.REAL,
            allowNull: false,
        },
        attack: {
            type: DataTypes.REAL,
            allowNull: false,
        },
        defense: {
            type: DataTypes.REAL,
            allowNull: false,
        },
        speed: {
            type: DataTypes.REAL,
            allowNull: false,
        },
        height: {
            type: DataTypes.REAL,
            allowNull: false,
        },
        weight: {
            type: DataTypes.REAL,
            allowNull: false,
        },
        types: {
            type: DataTypes.ARRAY(DataTypes.STRING),
            allowNull: false,
        }
    }, {timestamps: false})
};