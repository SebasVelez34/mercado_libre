import React from 'react'

export default function ErrorFallback ({ message = 'Error al procesar' }) {
  return (
    <>
      <section>
        <span>{message}</span>
      </section>
    </>

  )
}
