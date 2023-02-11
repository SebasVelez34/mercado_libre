import React from 'react'

export default function ImageContainer ({ picture }) {
  return (
    <div className='item-image'>
      <figure>
        <img src={picture} />
      </figure>
    </div>
  )
}
