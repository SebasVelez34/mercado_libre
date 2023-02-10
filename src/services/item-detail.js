import { ItemsDetailAdapter, ItemDescriptionAdapter } from '../adapter'

const fetchItemDescriptionDetail = async (url) => {
  return fetch(url)
    .then(res => res.json())
    .then(res => ItemDescriptionAdapter(res))
}

const fetchItemDetail = async (url) => {
  return fetch(url)
    .then(res => res.json())
    .then(async res => ItemsDetailAdapter(res))
}

export {
  fetchItemDetail,
  fetchItemDescriptionDetail
}
