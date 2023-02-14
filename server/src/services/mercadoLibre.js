const { SearchItemsResultAdapter, ItemsDetailAdapter, ItemDescriptionAdapter } = require('../adapters/items')
const { mercadoLibreInstance } = require('./instances')
const {
  MELI_SEARCH_BASE = '/sites/MLA/search?q=',
  MELI_ITEMS_URL = 'https://api.mercadolibre.com/items'
} = process.env

const getItemsService = async ({ search, limit = 4 }) =>
  mercadoLibreInstance.get(`${MELI_SEARCH_BASE}${search}&limit=${limit}`).then(({ data }) => SearchItemsResultAdapter(data))

const getItemService = async ({ id }) =>
  mercadoLibreInstance.get(`${MELI_ITEMS_URL}/${id}`).then(({ data }) => ItemsDetailAdapter(data))

const getItemDescriptionService = async ({ id }) =>
  mercadoLibreInstance.get(`${MELI_ITEMS_URL}/${id}/description`).then(({ data }) => ItemDescriptionAdapter(data))

module.exports = {
  getItemsService,
  getItemService,
  getItemDescriptionService
}
