import React from 'react'
import { Link } from 'react-router-dom'

export default function ResultCard ({ id, picture, title, amount, onClick }) {
  return (
    <li className='card-search-layout'>
      <div className='card'>
        <div className='container'>
          <div className='img-container' onClick={onClick}>
            <Link to={`/items/${id}`}>
              <figure>
                <div className='overlay-image' />
                <img src={picture} />
              </figure>
            </Link>
          </div>
          <div className='info-container'>
            <div className='info-price'>
              <span>$ {amount}</span>
            </div>
            <div className='info-title'>
              <Link to={`/items/${id}`}><h2>{title}</h2></Link>
            </div>
          </div>
          <div className='location-container'>
            <span>Location</span>
          </div>
        </div>
      </div>
    </li>
  )
}

// 3172209421 Ricardo
//
