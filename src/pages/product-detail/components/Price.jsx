import React from 'react'
import Button from '../../../components/Button'

function Price ({ condition, title, amount, soldQuantity }) {
  return (
    <div className='item-price'>
      <span className='condition-quantity'>{condition === 'new' ? 'Nuevo' : 'Usado'} - {soldQuantity} Vendidos</span>
      <h1 className='title'>{title}</h1>
      <span className='price'>$ {amount}</span>
      <Button className='buy-button'>Comprar</Button>
    </div>
  )
}

export default React.memo(Price)
