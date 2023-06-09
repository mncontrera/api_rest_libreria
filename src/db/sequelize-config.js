const { Sequelize } = require('sequelize');

const dbInstance = new Sequelize({
    host: "localhost",
    database: "xAcademyEjercicioNode",
    username: "root",
    password: "MyNewPass",
    dialect: "mysql"
})

module.exports = { dbInstance }