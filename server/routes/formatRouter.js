const Router = require('express')
const formatController = require('../controllers/FormatController')
const router = new Router()

router.get('/', formatController.get)

module.exports = router