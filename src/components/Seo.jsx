import React from 'react'
import { Helmet } from 'react-helmet'
import PropTypes from 'prop-types'
function Seo ({ appName = 'MercadoLibre', title, description, children }) {
  return (
    <Helmet>
      <title>{title} | {appName}</title>
      <meta name='description' content={description} />
      {children}
    </Helmet>
  )
}

Seo.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  children: PropTypes.element
}

export default React.memo(Seo)
