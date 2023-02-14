import { ItemsDetailAdapter } from '../adapter'
import { RequestAdapter } from '../adapter/request'

const fetchItemDetail = async (url) => {
  return fetch(url)
    .then(res => RequestAdapter(res))
    .then(async res => ItemsDetailAdapter(res))
}

export {
  fetchItemDetail
}
