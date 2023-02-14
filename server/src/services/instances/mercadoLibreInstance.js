const axios = require('axios')
const { MELI_BASE_API_URL = 'https://api.mercadolibre.com' } = process.env

module.exports = axios.create({
  baseURL: MELI_BASE_API_URL
})
