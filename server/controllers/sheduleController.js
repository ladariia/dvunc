const { Shedule } = require('../models/models.js')

class SheduleController {
    async create(req, res) {
        const { shedule_dateofstart, shedule_dateoffinish } = req.body //из тела запроса извлекаем название типа
        const shedule = await Shedule.create({ shedule_dateofstart, shedule_dateoffinish })
        return res.json(shedule)
    }

    async get(req, res) {
        const shedules = await Shedule.findAll()
        return res.json(shedules)
    }

    /* async getOne(req, res) {
        const shedules = await Shedule.findAll(
            {
                where: { courseCourseId: 1 },
                limit: 1,
                order: [['shedule_dateofstart', 'ASC']]
            },
        )
        return res.json(shedules)
    } */

    async delete(req, res) {
        const { shedule_id } = req.body
        const del = await Shedule.destroy({ where: { shedule_id } })
        return res.json(`deleted row(s): ${del}`)
    }
}

module.exports = new SheduleController()