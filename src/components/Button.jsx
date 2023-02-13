import React from 'react'

export default function Button ({ children, type = 'button', className, ariaLabel }) {
  return (
    <button className={className} type={type} aria-label={ariaLabel} role='button'>
      {children}
    </button>
  )
}
