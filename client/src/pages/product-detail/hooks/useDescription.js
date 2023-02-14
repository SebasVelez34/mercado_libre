import { useEffect, useState } from 'react'
import { fetchItemDescriptionDetail } from '../../../services'
import { SERVER_BASE_API_URL } from '../../../utils/constants'

export const useDescription = ({ id }) => {
  const [description, setDescription] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)

  const fetchItemDescription = async () => {
    setLoading(true)
    await fetchItemDescriptionDetail(`${SERVER_BASE_API_URL}/items/${id}/description`)
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
