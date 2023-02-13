import React from 'react'
import { ResultCard } from './components'
import { useSearchParams } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { useFetchItems } from '../../hooks'
import Seo from '../../components/Seo'

export default function SearchResultPage () {
  const [searchParams] = useSearchParams()
  const search = useFetchItems({ searchParams })

  const { entities: items, loading } = useSelector((state) => state.searchItems)

  if (loading) {
    return <>Cargando</>
  }
  return (
    <>
      <Seo
        title={search}
        description={`Envíos Gratis en el día ✓ Compre ${search} ! Conozca nuestras increíbles ofertas y promociones en millones de productos.`}
      />
      <section>
        <div className='result-container'>
          <ol>
            {items?.items && items.items.map((item, index) => {
              return (
                <ResultCard
                  id={item.id}
                  title={item.title}
                  picture={item.picture}
                  amount={item.price.amount}
                  location={item.location}
                  key={item.id}
                  tabIndex={index}
                />
              )
            })}

          </ol>
        </div>
      </section>
    </>
  )
}
