import React, { useState, useEffect } from 'react'
import { fetchItemDescriptionDetail, fetchItemDetail } from '../../services'
import { useParams } from 'react-router-dom'
import { MELI_ITEMS_DESCRIPTION_URL, MELI_ITEMS_URL } from '../../utils/constants'
import { useDispatch, useSelector } from 'react-redux'

export default function ProductDetailPage () {
  const { id } = useParams()
  const [description, setDescription] = useState('')
  const [descriptionLoading, setDescriptionLoading] = useState(false)
  // const dispatch = useDispatch()
  const { entities: { item: product }, loading } = useSelector(state => state.item)

  const fetchItem = async () => {
    setDescriptionLoading(true)
    const value = await fetchItemDescriptionDetail(`${MELI_ITEMS_DESCRIPTION_URL({ id })}`)
    setDescription(value.description)
    setDescriptionLoading(false)
  }

  useEffect(() => {
    fetchItem()
  }, [])

  if (loading) {
    return <>Loading</>
  }

  return (
    <>
      <section>
        <div className='item'>
          <div className='item-container'>
            <div className='item-image'>
              <figure>
                <img src={product.picture} />
              </figure>
            </div>
            <div className='item-price'>
              <span className='condition-quantity'>{product.condition === 'new' ? 'Nuevo' : 'Usado'} - {product.sold_quantity} Vendidos</span>
              <h1 className='title'>{product.title}</h1>
              <span className='price'>$ {product.price.amount}</span>
              <button className='buy-button'>Comprar</button>
            </div>
          </div>

          <div className='item-description-container'>
            <div className='item-description'>
              <h2>Descripción del producto</h2>
              {descriptionLoading
                ? <></>
                : <p>{description}</p>}
            </div>

          </div>
        </div>

      </section>

    </>

  )
}
