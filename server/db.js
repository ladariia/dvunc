const { Sequelize } = require('sequelize')

//конструктор - эксопртируем (т.е возвращает) объект Sequelize
module.exports = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASSWORD,
    //объект с полями
    {
        dialect: 'postgres', //субд
        host: process.env.DB_HOST,
        port: process.env.DB_PORT
    }
)