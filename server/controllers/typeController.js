const { Type } = require('../models/models.js')

class TypeController {
    async create(req, res) {
        const { type_name } = req.body //из тела запроса извлекаем название типа
        const type = await Type.create({ type_name })
        return res.json(type)
    }
    async get(req, res) {
        const types = await Type.findAll()
        return res.json(types)
    }
}

module.exports = new TypeController()