import React from 'react'
import PropTypes from 'prop-types'
export default function Input ({ type = 'text', onChange, className = '', id = '', placeholder = '', name = '' }) {
  return (
    <input
      type={type}
      onChange={onChange}
      className={className}
      placeholder={placeholder}
      name={name}
      id={id}
    />

  )
}

Input.propTypes = {
  type: PropTypes.string,
  className: PropTypes.string,
  id: PropTypes.string,
  placeholder: PropTypes.string,
  name: PropTypes.string,
  onChange: PropTypes.func
}
