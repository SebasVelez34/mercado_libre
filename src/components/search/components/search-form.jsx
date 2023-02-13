import React, { useState } from 'react'
import SearchLogo from '../../../assets/ic_Search.png'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { searchAction } from '../../../redux/slices/search'
import Button from '../../Button'
import Input from '../../Input'

export default function SearchForm () {
  const [search, setSearch] = useState('')
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleSubmit = (event) => {
    event.preventDefault()
    if (search) {
      dispatch(searchAction(search))
      navigate(`/items?search=${search}`)
    }
  }

  const handleChange = (event) => {
    const { target: { value } } = event
    setSearch(value.trim())
  }

  return (
    <form onSubmit={handleSubmit} className='search-form'>
      <label htmlFor='search-input'>Ingresa lo que quieras encontrar</label>
      <Input type='text' onChange={handleChange} className='search-input' placeholder='Nunca dejes de buscar' name='search' />
      <Button type='submit' ariaLabel='Botón para buscar productos'>
        <img src={SearchLogo} alt='Icono de búsqueda de productos' />
      </Button>
    </form>
  )
}
