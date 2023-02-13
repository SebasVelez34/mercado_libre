import React from 'react'
import PropTypes from 'prop-types'
export default function ImageContainer ({ picture }) {
  return (
    <div className='item-image'>
      <figure>
        <img src={picture} />
      </figure>
    </div>
  )
}

ImageContainer.propTypes = {
  picture: PropTypes.string
}
