const MELI_BASE_API_URL = 'https://api.mercadolibre.com'
const MELI_SEARCH_BASE = `${MELI_BASE_API_URL}/sites/MLA/search?q=`

const MELI_ITEMS_URL = `${MELI_BASE_API_URL}/items`
const MELI_ITEMS_DESCRIPTION_URL = ({ id }) => `${MELI_ITEMS_URL}/${id}/description`

export {
  MELI_BASE_API_URL,
  MELI_SEARCH_BASE,
  MELI_ITEMS_URL,
  MELI_ITEMS_DESCRIPTION_URL
}
