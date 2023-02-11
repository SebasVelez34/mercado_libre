import React from 'react'
import { ResultCard } from './components'
import { useSearchParams } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { useFetchItems } from '../../hooks'

export default function SearchResultPage () {
  const [searchParams] = useSearchParams()
  useFetchItems({ searchParams })

  const { entities: items, loading } = useSelector((state) => state.searchItems)

  if (loading) {
    return <>Cargando</>
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
                />
              )
            })}

          </ol>
        </div>
      </section>
    </>
  )
}
