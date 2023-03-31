const { Format } = require('../models/models.js')

class FormatController {

    async create(req, res) {
        const { format_name } = req.body //из тела запроса извлекаем название типа
        const format = await Format.create({ format_name })
        return res.json(format)
    }
    async get(req, res) {
        const formats = await Format.findAll()
        return res.json(formats)
    }
}

module.exports = new FormatController()