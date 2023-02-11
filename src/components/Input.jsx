import React from 'react'

export default function Input ({ type = 'text', onChange, className = '', id = '', placeholder = '', name = '' }) {
  return (
    <input
      type={type}
      onChange={onChange}
      className={className}
      placeholder={placeholder}
      name={name}
    />

  )
}
