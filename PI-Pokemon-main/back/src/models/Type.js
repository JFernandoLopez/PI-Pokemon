const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
    sequelize.define("Type", {
        UUID: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            allowNull: false,
            primaryKey: true,
        },
        name: {
            type: DataTypes.ENUM(
                "normal", 
                "fighting", 
                "flying",
                "poison",
                "ground",
                "rock",
                "bug",
                "ghost",
                "steel",
                "fire",
                "water",
                "grass",
                "electric",
                "psychic",
                "ice",
                "dragon",
                "dark",
                "fairy",
                "unknown",
                "shadow"
            ),
            allowNull: false
        }
    }, {
        timestamps: false
    });
};