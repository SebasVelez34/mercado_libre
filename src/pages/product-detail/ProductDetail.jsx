import React from 'react'
import { useParams } from 'react-router-dom'
import { Description, ImageContainer, Price } from './components'
import { useFetchItem } from '../../hooks'
import Seo from '../../components/Seo'
import { ErrorBoundary } from '../../utils'
import ErrorFallback from '../../components/ErrorFallback'

export default function ProductDetailPage () {
  const { id } = useParams()
  const [product, loading, error] = useFetchItem({ id })

  if (loading) {
    return <>Cargando</>
  }

  return (
    <>
      <Seo
        title={product.title}
        description={`Envíos Gratis en el día ✓ Compre ${product.title} ! Conozca nuestras increíbles ofertas y promociones en millones de productos.`}
      />
      <section>
        <div className='item'>
          <ErrorBoundary
            fallBackComponent={<ErrorFallback />}
            resetCondition={!error}
            error={error}
          >
            <div className='item-container'>
              <ImageContainer picture={product.picture} />
              <Price
                condition={product.condition}
                title={product.title}
                amount={product.price.amount}
                soldQuantity={product.sold_quantity}
              />
            </div>
          </ErrorBoundary>
          <Description id={id} />
        </div>
      </section>

    </>

  )
}
