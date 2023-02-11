import React from 'react'

export default function Description ({ loading, description }) {
  return (
    <div className='item-description-container'>
      <div className='item-description'>
        <h2>Descripción del producto</h2>
        {loading
          ? <></>
          : <p>{description}</p>}
      </div>
    </div>
  )
}
