const express = require('express')
const genericRoutes = express.Router()

const items = require('./items')

genericRoutes.use('/items', items)

module.exports = genericRoutes
