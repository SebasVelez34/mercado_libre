import React from 'react'
import { Link } from 'react-router-dom'

export default function ResultCard ({ id, picture, title, amount, onClick }) {
  return (
    <li key={id}>
      <div className='card'>
        <div className='container'>
          <div className='img-container' onClick={onClick}>
            <Link to={`/items/${id}`}><img src={picture} /></Link>
          </div>
          <div>
            <Link to={`/items/${id}`}><div>{title}</div></Link>
            <div>{amount}</div>
          </div>
          <div>Location</div>
        </div>
      </div>
    </li>
  )
}

// 3172209421 Ricardo
//
