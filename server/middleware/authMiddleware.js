//decode token + check on valid
//if checking failed - get error + message "wasnt auth"

const jwt = require('jsonwebtoken')

module.exports = function (req, res, next) {
    if (req.method === "OPTIONS") { //строгое равенство '' === false; post get put delete
        next()
    }
    try {
        const token = req.headers.authorization.split(' ')[1]//тк в header сначала тип токена, потом токен - Bearer jkfhgjgh
        if (!token) {
            return res.status(401).json({ message: "Пользователь не авторизован" })
        }
        const decodedToken = jwt.verify(token, process.env.SECRET_KEY)
        req.user = decodedToken //цепляем decoded в поле user
        next() //к сл мидлвэеру
    } catch (error) {
        res.status(401).json({ message: "Пользователь не авторизован" })
    }
}