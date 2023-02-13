export const SearchItemsResultAdapter = (BackendApi = []) => {
  return {
    author: {
      name: 'User',
      lastname: 'Default'
    },
    categories: SearchItemsCategoriesAdapter(BackendApi.filters),
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
      },
      location: item.address.state_name
    }
  })
}

export const SearchItemsCategoriesAdapter = (filters = []) => {
  if (!filters.length) return filters

  const [categories] = filters

  return categories?.values.map(value => value.name)
}
