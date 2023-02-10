import React, { useEffect } from 'react'
import { ResultCard } from './components'
import { useSearchParams } from 'react-router-dom'
import { MELI_ITEMS_URL, MELI_SEARCH_BASE } from '../../utils/constants'
import { fetchItemsList } from '../../redux/slices/search-items'
import { useDispatch, useSelector } from 'react-redux'
import { searchAction } from '../../redux/slices/search'
import { fetchItem } from '../../redux/slices/item'

export default function SearchResultPage () {
  const [searchParams] = useSearchParams()
  const URLparams = searchParams.get('search')
  const dispatch = useDispatch()
  const { entities: items, loading } = useSelector((state) => state.searchItems)
  const search = useSelector((state) => state.search)

  const getItems = () => {
    const term = search || URLparams
    dispatch(fetchItemsList(`${MELI_SEARCH_BASE}${term}&limit=4`))
  }

  useEffect(() => {
    getItems()
  }, [searchParams])

  if (!search) {
    dispatch(searchAction(URLparams))
  }

  const handleClick = (id) => {
    dispatch(fetchItem(`${MELI_ITEMS_URL}/${id}`))
  }

  if (loading) {
    return <>Loading ...</>
  }
  return (
    <>
      <section>
        <div className='result-container'>
          <ol>
            {items?.items && items.items.map(item => {
              return (
                <ResultCard
                  id={item.id}
                  title={item.title}
                  picture={item.picture}
                  amount={item.price.amount}
                  key={item.id}
                  onClick={() => handleClick(item.id)}
                />
              )
            })}

          </ol>
        </div>
      </section>
    </>
  )
}
