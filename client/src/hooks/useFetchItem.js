import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchItem } from '../redux/slices/item'
import { SERVER_BASE_API_URL } from '../utils/constants'

export const useFetchItem = ({ id }) => {
  const dispatch = useDispatch()

  const dispatchItems = () => {
    dispatch(fetchItem(`${SERVER_BASE_API_URL}/items/${id}`))
  }

  useEffect(() => {
    dispatchItems()
  }, [id])
  const { entities: { item: product }, loading, error } = useSelector(state => state.item)

  return [product, loading, error]
}
