const { Module } = require('../models/models.js')

class ModuleController {
    async create(req, res) {
        const { module_name, module_subject } = req.body //из тела запроса извлекаем название типа
        const module = await Module.create({ module_name, module_subject })
        return res.json(module)
    }

    async get(req, res) {
        const modules = await Module.findAll()
        return res.json(modules)
    }

    async delete(req, res) {
        const { module_id } = req.body
        const del = await Module.destroy({ where: { module_id } })
        return res.json(`deleted row(s): ${del}`)
    }
}

module.exports = new ModuleController()