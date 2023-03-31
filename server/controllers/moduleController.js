const { Module, Subject } = require('../models/models.js')
const ApiError = require('../error/ApiError')

class ModuleController {
    async create(req, res, next) {
        try {
            let { module_name, module_subject } = req.body //из тела запроса извлекаем название типа
            const module = await Module.create({ module_name }) //из тела запроса извлекаем название типа
            //?
            /* if (module_subject) {
                module_subject = JSON.parse(module_subject)
                module_subject.forEach(i =>
                    Subject.create({
                        subject_name: i.subject_name
                    }),
                    module.addSubject(i)
                )
            } */

            return res.json(module)

        } catch (error) {
            next(ApiError.badRequest(error.message))
        }
    }

    async get(req, res) {
        const modules = await Module.findAll({
            include: [{ model: Subject }]
        })
        return res.json(modules)
    }

    async delete(req, res) {
        const { module_id } = req.body
        const del = await Module.destroy({ where: { module_id } })
        return res.json(`deleted row(s): ${del}`)
    }
}

module.exports = new ModuleController()