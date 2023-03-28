const Router = require('express')
const subjectController = require('../controllers/subjectController')
const router = new Router()

router.post('/', subjectController.create)
router.get('/', subjectController.get)
router.delete('/', subjectController.delete)

module.exports = router