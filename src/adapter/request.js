import { ERRORS } from '../utils/constants'

export const RequestAdapter = (res) => {
  if (res.status !== 200) {
    throw new Error(ERRORS.REQUEST_ERROR)
  }
  return res.json()
}
