import React from 'react'

export default function Button ({ children, type = 'button', className }) {
  return (
    <button className={className} type={type}>
      {children}
    </button>
  )
}
