import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchItem } from '../redux/slices/item'
import { MELI_ITEMS_URL } from '../utils/constants'

export const useFetchItem = ({ id }) => {
  const dispatch = useDispatch()

  const dispatchItems = () => {
    dispatch(fetchItem(`${MELI_ITEMS_URL}/${id}`))
  }

  useEffect(() => {
    dispatchItems()
  }, [id])
  const { entities: { item: product }, loading, error } = useSelector(state => state.item)

  return [product, loading, error]
}
