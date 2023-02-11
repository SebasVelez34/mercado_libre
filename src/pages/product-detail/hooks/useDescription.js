import { useEffect, useState } from 'react'
import { fetchItemDescriptionDetail } from '../../../services'
import { MELI_ITEMS_DESCRIPTION_URL } from '../../../utils/constants'

export const useDescription = ({ id }) => {
  const [description, setDescription] = useState('')
  const [loading, setLoading] = useState(false)

  const fetchItemDescription = async () => {
    setLoading(true)
    const value = await fetchItemDescriptionDetail(`${MELI_ITEMS_DESCRIPTION_URL({ id })}`)
    setDescription(value.description)
    setLoading(false)
  }

  useEffect(() => {
    fetchItemDescription()
  }, [id])

  return [description, loading]
}
