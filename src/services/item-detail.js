import { ItemsDetailAdapter, ItemDescriptionAdapter } from '../adapter'
import { RequestAdapter } from '../adapter/request'

const fetchItemDescriptionDetail = async (url) => {
  return fetch(url)
    .then(res => RequestAdapter(res))
    .then(res => ItemDescriptionAdapter(res))
}

const fetchItemDetail = async (url) => {
  return fetch(url)
    .then(res => RequestAdapter(res))
    .then(async res => ItemsDetailAdapter(res))
}

export {
  fetchItemDetail,
  fetchItemDescriptionDetail
}
