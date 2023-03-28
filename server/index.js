require('dotenv').config()
const express = require('express')
const sequelize = require('./db')
const models = require('./models/models')
const cors = require('cors') //for sending requests from browser
const router = require('./routes/index')
const errorHandler = require('./middleware/ErrorHandlingMiddleware')

const PORT = process.env.PORT
const app = express()
app.use(cors())
app.use(express.json()) //app can parse json
app.use('/api', router)

//обработка ошибок - last middleware - замыкающий
app.use(errorHandler)

//все операции с бд async
const start = async () => {
    try {
        await sequelize.authenticate() //connection to db
        await sequelize.sync() //check state of db with shema
        app.listen(PORT, () => console.log(`Server started on port ${PORT}`))
    } catch (error) {
        console.log(error)
    }
}

start()

