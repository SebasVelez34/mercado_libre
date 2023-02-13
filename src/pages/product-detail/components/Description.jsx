import React from 'react'
import { useDescription } from '../hooks/useDescription'
import PropTypes from 'prop-types'
import { ErrorBoundary } from '../../../utils'
import ErrorFallback from '../../../components/ErrorFallback'
export default function Description ({ id }) {
  const [description, loading, error] = useDescription({ id })

  if (loading && !error) {
    return <>Cargando</>
  }
  return (
    <ErrorBoundary
      fallBackComponent={<ErrorFallback message='Error al intentar cargar la descripción del producto' />}
      resetCondition={!error}
      error={error}
    >
      <div className='item-description-container'>
        <div className='item-description'>
          <h2>Descripción del producto</h2>
          {loading
            ? <></>
            : <p>{description}</p>}
        </div>
      </div>
    </ErrorBoundary>
  )
}

Description.propTypes = {
  id: PropTypes.string
}
