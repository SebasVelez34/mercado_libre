import React, { useState } from 'react'
import SearchLogo from '../../../assets/ic_Search.png'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { searchAction } from '../../../redux/slices/search'

export default function SearchForm () {
  const [search, setSearch] = useState()
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleSubmit = (event) => {
    event.preventDefault()
    dispatch(searchAction(search))
    navigate(`/items?search=${search}`)
  }

  const handleChange = (event) => {
    event.preventDefault()
    const { target: { value } } = event
    setSearch(value)
  }

  return (
    <form onSubmit={handleSubmit} className='search-form'>
      <label htmlFor='search-input'>Ingresa lo que quieras encontrar</label>
      <input type='text' onChange={handleChange} className='search-input' placeholder='Nunca dejes de buscar' name='search' />
      <button type='submit'>
        <img src={SearchLogo} />
      </button>
    </form>
  )
}
