const Router = require('express')
const moduleController = require('../controllers/moduleController')
const router = new Router()
const multer = require('multer')

router.post('/', multer().none(), moduleController.create)
router.get('/', moduleController.get)
router.delete('/', moduleController.delete)

module.exports = router