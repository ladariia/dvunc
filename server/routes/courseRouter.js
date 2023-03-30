const Router = require('express')
const courseController = require('../controllers/courseController')
const router = new Router()
const multer = require('multer')

router.post('/', multer().none(), courseController.create)
router.get('/', courseController.get)
router.get('/:course_id', courseController.getOne)
router.delete('/', courseController.delete)

module.exports = router