import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

function ResultCard ({ id, picture, title, amount, location, tabIndex }) {
  const ariaLabel = `Ver detalles del producto ${title} y su descripción`
  return (
    <li className='card-search-layout' tabIndex={tabIndex}>
      <div className='card'>
        <div className='container'>
          <div className='img-container'>
            <Link to={`/items/${id}`} aria-label={ariaLabel} role='link'>
              <figure>
                <div className='overlay-image' />
                <img src={picture} alt={`Imagen del producto ${title}`} />
              </figure>
            </Link>
          </div>
          <div className='info-container'>
            <div className='info-price'>
              <span>$ {amount}</span>
            </div>
            <div className='info-title'>
              <Link to={`/items/${id}`} aria-label={ariaLabel} role='link'><h2>{title}</h2></Link>
            </div>
          </div>
          <div className='location-container'>
            <span>{location}</span>
          </div>
        </div>
      </div>
    </li>
  )
}

ResultCard.propTypes = {
  id: PropTypes.string,
  picture: PropTypes.string,
  title: PropTypes.string,
  amount: PropTypes.number,
  location: PropTypes.string,
  tabIndex: PropTypes.number
}

export default React.memo(ResultCard)
