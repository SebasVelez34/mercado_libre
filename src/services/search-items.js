import { SearchItemsResultAdapter } from '../adapter'
import { RequestAdapter } from '../adapter/request'

export const fetchItems = async (url) => {
  return fetch(url)
    .then(res => RequestAdapter(res))
    .then(res => SearchItemsResultAdapter(res))
}
