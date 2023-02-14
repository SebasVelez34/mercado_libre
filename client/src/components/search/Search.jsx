import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../../assets/Logo_ML.png'
import SearchForm from './components/search-form'

export default function Search () {
  return (
    <header className='search-header'>
      <div className='container'>
        <Link to='/'>
          <img className='logo' src={Logo} alt='Logo de la página' />
        </Link>
        <SearchForm />
      </div>
    </header>
  )
}
