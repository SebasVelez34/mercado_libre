export const SearchItemsResultAdapter = (BackendApi = []) => {
  return {
    author: {
      name: 'User',
      lastname: 'Default'
    },
    categories: BackendApi.categories,
    items: BackendApi.items
  }
}
