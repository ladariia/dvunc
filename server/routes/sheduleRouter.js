const Router = require('express')
const sheduleController = require('../controllers/sheduleController')
const router = new Router()

router.post('/', sheduleController.create)
router.get('/', sheduleController.get)
router.delete('/', sheduleController.delete)

module.exports = router