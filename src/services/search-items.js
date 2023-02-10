import { SearchItemsResultAdapter } from '../adapter'

export const fetchItems = async (url) => {
  return fetch(url)
    .then(res => res.json())
    .then(res => SearchItemsResultAdapter(res))
}
