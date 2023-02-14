const router = require('express').Router()
const controller = require('./controller')

router.get('/', controller.getItems)
router.get('/:id', controller.getItem)

module.exports = router
