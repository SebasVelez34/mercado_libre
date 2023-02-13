import { useEffect, useState } from 'react'
import { fetchItemDescriptionDetail } from '../../../services'
import { MELI_ITEMS_DESCRIPTION_URL } from '../../../utils/constants'

export const useDescription = ({ id }) => {
  const [description, setDescription] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)

  const fetchItemDescription = async () => {
    setLoading(true)
    await fetchItemDescriptionDetail(`${MELI_ITEMS_DESCRIPTION_URL({ id })}`)
      .then(value => {
        setDescription(value.description)
        setLoading(false)
      })
      .catch(() => {
        setError(true)
      })
  }

  useEffect(() => {
    fetchItemDescription()
  }, [id])

  return [description, loading, error]
}
