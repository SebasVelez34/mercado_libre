const SearchItemsResultAdapter = (BackendApi = []) => {
  return {
    author: {
      name: 'User',
      lastname: 'Default'
    },
    categories: SearchItemsCategoriesAdapter(BackendApi.filters),
    items: SearchItemsAdapter(BackendApi.results)
  }
}

const SearchItemsAdapter = (items = []) => {
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

const SearchItemsCategoriesAdapter = (filters = []) => {
  if (!filters.length) return filters

  const [categories] = filters

  return categories?.values.map(value => value.name)
}

const ItemsDetailAdapter = (BackendResult = {}) => {
  const {
    id,
    title,
    condition,
    shipping,
    // eslint-disable-next-line camelcase
    sold_quantity,
    price,
    // eslint-disable-next-line camelcase
    currency_id,
    pictures
  } = BackendResult
  // eslint-disable-next-line camelcase
  const picture_url = pictures.pop().secure_url

  return {
    author: {
      name: 'User',
      lastname: 'Default'
    },
    item: {
      id,
      title,
      price: {
        // eslint-disable-next-line camelcase
        currency: currency_id,
        amount: price,
        decimals: 0
      },
      // eslint-disable-next-line camelcase
      picture: picture_url,
      condition,
      free_shipping: shipping.free_shipping,
      // eslint-disable-next-line camelcase
      sold_quantity
    }
  }
}

const ItemDescriptionAdapter = (BackendResult = {}) => {
  return {
    description: BackendResult.plain_text
  }
}

module.exports = {
  SearchItemsResultAdapter,
  ItemsDetailAdapter,
  ItemDescriptionAdapter
}
