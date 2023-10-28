const { app } = require('./src/index')
const { sequelize } = require("./src/DB_connection");
const PORT = 3001;

sequelize
    .sync({ force: true })
    .then(() => {
        app.listen(PORT, () => {
            console.log(`Server raised in port: ${PORT}`)
        })
    })
    .catch((error) => {
        console.log(error)
    })