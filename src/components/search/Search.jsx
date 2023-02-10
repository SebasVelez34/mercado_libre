import React from 'react'
import Logo from '../../assets/Logo_ML.png'
import SearchForm from './components/search-form'

export default function Search () {
  return (
    <header className='search-header'>
      <div className='container'>
        <img className='logo' src={Logo} />
        <SearchForm />
      </div>
    </header>
  )
}
