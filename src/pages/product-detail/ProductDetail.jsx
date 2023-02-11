import React from 'react'
import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { Description, ImageContainer, Price } from './components'
import { useDescription } from './hooks/useDescription'
import { useFetchItem } from '../../hooks'

export default function ProductDetailPage () {
  const { id } = useParams()
  useFetchItem({ id })
  const [description, descriptionLoading] = useDescription({ id })
  const { entities: { item: product }, loading } = useSelector(state => state.item)

  if (loading) {
    return <>Cargando</>
  }

  return (
    <>
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
          <Description loading={descriptionLoading} description={description} />
        </div>
      </section>

    </>

  )
}
