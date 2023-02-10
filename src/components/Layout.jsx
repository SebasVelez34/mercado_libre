import React from 'react'
import { Outlet } from 'react-router-dom'
import { Search } from './search'

export default function Layout () {
  return (
    <>
      <Search />
      <main className='main-section'>
        <Outlet />
      </main>
    </>
  )
}
