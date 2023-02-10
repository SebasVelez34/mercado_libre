import { createSlice } from '@reduxjs/toolkit'

export const searchSlice = createSlice({
  name: 'search',
  initialState: '',
  reducers: {
    searchAction: (state, action) => {
      const newSearch = action.payload
      return newSearch
    },
    resetSearch: () => {
      return ''
    }
  }
})

export const { searchAction, resetSearch } = searchSlice.actions

export default searchSlice.reducer
