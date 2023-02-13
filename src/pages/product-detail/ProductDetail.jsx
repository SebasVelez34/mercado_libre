import React from 'react'
import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { Description, ImageContainer, Price } from './components'
import { useDescription } from './hooks/useDescription'
import { useFetchItem } from '../../hooks'
import Seo from '../../components/Seo'

export default function ProductDetailPage () {
  const { id } = useParams()
  const [product, loading] = useFetchItem({ id })

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
          <div className='item-container'>
            <ImageContainer picture={product.picture} />
            <Price
              condition={product.condition}
              title={product.title}
              amount={product.price.amount}
              soldQuantity={product.sold_quantity}
            />
          </div>
          <Description id={id} />
        </div>
      </section>

    </>

  )
}
