const express = require("express");
const { sequelize } = require("./DB_connection");
const { router } = require("./routes");
const app = express()
const PORT = 3001;

app.use(express.json())

app.use('/pokemons', router)

sequelize
    .sync({ alter: true })
    .then(() => {
        app.listen(PORT, () => {
            console.log(`Server raised in port: ${PORT}`)
        })
    })
    .catch((error) => {
        console.log(error)
    })
