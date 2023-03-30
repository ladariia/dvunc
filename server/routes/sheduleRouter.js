const Router = require('express')
const sheduleController = require('../controllers/sheduleController')
const router = new Router()
const multer = require('multer')

router.post('/', multer().none(), sheduleController.create)
router.get('/', sheduleController.get)
router.delete('/', sheduleController.delete)

module.exports = router