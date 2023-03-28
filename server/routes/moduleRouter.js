const Router = require('express')
const moduleController = require('../controllers/moduleController')
const router = new Router()

router.post('/', moduleController.create)
router.get('/', moduleController.get)
router.delete('/', moduleController.delete)

module.exports = router