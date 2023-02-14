export const ItemsDetailAdapter = (BackendResult = {}) => {
  const {
    author = {},
    description = '',
    item = {}
  } = BackendResult
  // eslint-disable-next-line camelcase

  return {
    author: {
      name: author.name,
      lastname: author.lastname
    },
    item: {
      id: item.id,
      title: item.title,
      price: {
        // eslint-disable-next-line camelcase
        currency: item.price.currency_id,
        amount: item.price.amount,
        decimals: item.price.decimals
      },
      // eslint-disable-next-line camelcase
      picture: item.picture,
      condition: item.condition,
      free_shipping: item.free_shipping,
      // eslint-disable-next-line camelcase
      sold_quantity: item.sold_quantity,
      description
    }
  }
}
