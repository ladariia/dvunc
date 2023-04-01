const { Course, Module, Shedule, Subject, Type, Format } = require('../models/models.js')
const ApiError = require('../error/ApiError')

class CourseController {
    async create(req, res, next) {
        try {
            let { course_name, typeTypeId, course_duration, course_shedule, formatFormatId, course_price, course_module, module_subject } = req.body //из тела запроса извлекаем название типа
            const candidate = await Course.findOne({ where: { course_name } })
            if (candidate) {
                return next(ApiError.badRequest('Курс с таким названием уже существует'))
            }
            const course = await Course.create({ course_name, typeTypeId, course_duration, formatFormatId, course_price })

            if (course_module) {
                course_module = JSON.parse(course_module)
                course_module.forEach((i) => {
                    Module.create({
                        module_name: i.module_name,
                        courseCourseId: course.course_id,
                    })
                    //i.addSubject(j)
                })
            }

            if (course_shedule) {
                course_shedule = JSON.parse(course_shedule)
                course_shedule.forEach(i =>
                    Shedule.create({
                        shedule_dateofstart: i.shedule_dateofstart,
                        shedule_dateoffinish: i.shedule_dateoffinish,
                        courseCourseId: course.course_id
                    })
                )
            }

            return res.json(course)

        } catch (error) {
            next(ApiError.badRequest(error.message))
        }
    }
    async get(req, res) {
        const { typeTypeId } = req.query //из строки запроса
        let courses
        if (!typeTypeId) {
            courses = await Course.findAll({
                include: [{
                    model: Type // will create a left join
                }]
            })
        } else {
            courses = await Course.findAll({
                include: [{
                    model: Type // will create a left join
                }],
                where: { typeTypeId }
            })
        }
        return res.json(courses)
    }

    async getOne(req, res) {
        const { course_id } = req.params
        const course = await Course.findOne(
            {
                where: { course_id },
                include: [{ model: Type }, { model: Format, as: "format" }, { model: Module, as: "course_module", include: [{ model: Subject, as: "subjects" }] }, { model: Shedule, as: "course_shedule" }],
            }
        )
        return res.json(course)
    }

    async delete(req, res) {
        const { course_id } = req.body
        const del = await Course.destroy({ where: { course_id } })
        return res.json(`deleted row(s): ${del}`)
    }
}

module.exports = new CourseController()