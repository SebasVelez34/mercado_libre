export const SearchItemsResultAdapter = (BackendApi = []) => {
  return {
    author: {
      name: 'Sebastiancho',
      lastname: 'Velez'
    },
    categories: ['Hola1', 'Hola2'],
    items: SearchItemsAdapter(BackendApi.results)
  }
}

export const SearchItemsAdapter = (items = []) => {
  return items.length && items.map(item => {
    return {
      id: item.id,
      title: item.title,
      condition: item.condition,
      free_shipping: item.shipping.free_shipping,
      picture: item.thumbnail,
      price: {
        currency: item.currency_id,
        amount: item.price,
        decimals: 0
      }
    }
  })
}
