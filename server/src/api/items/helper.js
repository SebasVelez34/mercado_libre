const { mercadoLibre } = require('../../services')

async function getItems ({ search, limit }) {
  const response = await mercadoLibre.getItemsService({ search, limit })
  return response
}

async function getItem ({ id }) {
  const response = await mercadoLibre.getItemService({ id })
  return response
}

async function getItemDescription ({ id }) {
  const response = await mercadoLibre.getItemDescriptionService({ id })
  return response
}

async function getItemWithDescription ({ id }) {
  const item = await getItem({ id })
  const description = await getItemDescription({ id })
  const itemWithDescription = { ...item, ...description }
  return itemWithDescription
}

module.exports = {
  getItems,
  getItem,
  getItemDescription,
  getItemWithDescription
}
