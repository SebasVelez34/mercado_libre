import React from 'react'
import Button from '../../../components/Button'

export default function Price ({ condition, title, amount, soldQuantity }) {
  return (
    <div className='item-price'>
      <span className='condition-quantity'>{condition === 'new' ? 'Nuevo' : 'Usado'} - {soldQuantity} Vendidos</span>
      <h1 className='title'>{title}</h1>
      <span className='price'>$ {amount}</span>
      <Button className='buy-button'>Comprar</Button>
    </div>
  )
}
