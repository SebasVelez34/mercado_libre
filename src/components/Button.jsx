import React from 'react'
import PropTypes from 'prop-types'
export default function Button ({ children = <></>, type = 'button', className = '', ariaLabel = '' }) {
  return (
    <button className={className} type={type} aria-label={ariaLabel} role='button'>
      {children}
    </button>
  )
}
Button.propTypes = {
  type: PropTypes.string,
  className: PropTypes.string,
  ariaLabel: PropTypes.string
}
