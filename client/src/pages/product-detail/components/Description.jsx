import React from 'react'
import PropTypes from 'prop-types'

function Description ({ description }) {
  return (
    <div className='item-description-container'>
      <div className='item-description'>
        <h2>Descripción del producto</h2>
        <p>{description}</p>
      </div>
    </div>
  )
}

Description.propTypes = {
  description: PropTypes.string
}

export default React.memo(Description)
