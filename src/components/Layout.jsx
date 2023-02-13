import React from 'react'
import { Outlet } from 'react-router-dom'
import { Search } from './search'
import Seo from './Seo'

export default function Layout () {
  return (
    <>
      <Seo
        title='MercadoLibre'
        description='Compre productos en Mercado Libre. Marcas y productos a increíbles precios.'
      />
      <Search />
      <main className='main-section'>
        <Outlet />
      </main>
    </>
  )
}
