import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
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
}
