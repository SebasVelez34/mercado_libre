import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { searchAction } from '../redux/slices/search'
import { fetchItemsList } from '../redux/slices/search-items'
import { LIMIT_SEARCH_ITEMS, MELI_SEARCH_BASE } from '../utils/constants'

export const useFetchItems = ({ searchParams }) => {
  const dispatch = useDispatch()
  const URLparams = searchParams.get('search')
  const search = useSelector((state) => state.search)
  if (!search) dispatch(searchAction(URLparams))

  const getItems = () => {
    dispatch(fetchItemsList(`${MELI_SEARCH_BASE}${search}&limit=${LIMIT_SEARCH_ITEMS}`))
  }

  useEffect(() => {
    getItems()
  }, [searchParams])

  return search
}
