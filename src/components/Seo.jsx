import React from 'react'
import { Helmet } from 'react-helmet'

function Seo ({ appName = 'MercadoLibre', title, description, children }) {
  return (
    <Helmet>
      <title>{title} | {appName}</title>
      <meta name='description' content={description} />
      {children}
    </Helmet>
  )
}

export default React.memo(Seo)
