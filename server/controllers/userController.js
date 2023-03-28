const ApiError = require('../error/ApiError')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const { User } = require('../models/models')

const generateJwt = (user_id, user_login) => {
    return jwt.sign({ user_id, user_login }, //без : -> получили из тела запроса
        process.env.SECRET_KEY,
        { expiresIn: '1h' }
    )
}

class UserController {
    async registration(req, res, next) {
        const { user_login, user_password } = req.body
        if (!user_login || !user_password) {
            next(ApiError)
            return next(ApiError.badRequest('Некорректный логин или пароль'))
        }

        const candidate = await User.findOne({ where: { user_login } })
        if (candidate) {
            return next(ApiError.badRequest('Пользователь с таким логином уже существует'))
        }
        const hashPassword = await bcrypt.hash(user_password, 5)
        const user = await User.create({ user_login, user_password: hashPassword })
        const token = generateJwt(user.user_id, user.user_login)
        return res.json({ token })
    }
    async login(req, res, next) {
        const { user_login, user_password } = req.body
        const user = await User.findOne({ where: { user_login } })
        if (!user) {
            return next(ApiError.internal('Пользователь с таким логином не найден'))
        }
        let comparePwd = bcrypt.compareSync(user_password, user.user_password) //пароль из инпута, пароль из бд
        if (!comparePwd) {
            return next(ApiError.internal('Неверный пароль'))
        }
        const token = generateJwt(user.user_id, user.user_login)
        return res.json({ token })
    }
    async check(req, res, next) {
        //generate new token and send token to client, so if user uses account constantly - token rewrites
        const token = generateJwt(req.user.user_id, req.user.user_login)
        return res.json({ token })
    }
}

module.exports = new UserController()