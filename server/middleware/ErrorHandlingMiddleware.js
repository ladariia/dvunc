const ApiError = require('../error/ApiError')

//next - для передачи управления сл в цепочке middleware
module.exports = function (err, req, res, next) {
    if (err instanceof ApiError) { //если класс ошибки ApiError
        return res.status(err.status).json({ message: err.message }) //ответ со статус кодом и текстом из ошибки
    }
    return res.status(500).json({ message: "Непредвиденная ошибка " })
}