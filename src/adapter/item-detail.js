export const ItemsDetailAdapter = (BackendResult = {}) => {
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

export const ItemDescriptionAdapter = (BackendResult = {}) => {
  return {
    description: BackendResult.plain_text
  }
}
