import React from 'react'
import { useDescription } from '../hooks/useDescription'

export default function Description ({ id }) {
  const [description, loading] = useDescription({ id })

  if (loading) {
    return <>Cargando</>
  }
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
