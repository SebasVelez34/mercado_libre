const cors = require('cors')
const express = require('express')
const bodyParser = require('body-parser')
const path = require('path')
const apiRoutes = require('./src/api')
require('dotenv').config({ path: path.resolve(__dirname, '.env') })

const app = express()

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(cors())
app.use('/api', apiRoutes)

const PORT = process.env.SERVER_PORT || 3000
app.listen(PORT, () => {
  console.log('server started: http://localhost:3000')
})
