const { Subject } = require('../models/models.js')

class SubjectController {
    async create(req, res) {
        const { subject_name } = req.body //из тела запроса извлекаем название типа
        const subject = await Subject.create({ subject_name })
        return res.json(subject)
    }

    async get(req, res) {
        const subjects = await Subject.findAll()
        return res.json(subjects)
    }
    async delete(req, res) {
        const { subject_id } = req.body
        const del = await Subject.destroy({ where: { subject_id } })
        return res.json(`deleted row(s): ${del}`)
    }
}

module.exports = new SubjectController()