//маршруты для отработки методов
const Router = require('express')
const router = new Router()
const courseRouter = require('./courseRouter')
const formatRouter = require('./formatRouter')
const moduleRouter = require('./moduleRouter')
const sheduleRouter = require('./sheduleRouter')
const subjectRouter = require('./subjectRouter')
const typeRouter = require('./typeRouter')
const userRouter = require('./userRouter')

//сопостовляем маршруты с роутером
router.use('/user', userRouter)
router.use('/course', courseRouter)
router.use('/format', formatRouter)
router.use('/module', moduleRouter)
router.use('/shedule', sheduleRouter)
router.use('/subject', subjectRouter)
router.use('/type', typeRouter)

module.exports = router