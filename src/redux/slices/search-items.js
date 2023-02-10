import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { fetchItems } from '../../services'

const ITEM_LIST = 'itemList'

const fetchItemsList = createAsyncThunk(
  `${ITEM_LIST}/fetchItemsListStatus`,
  async (url) => await fetchItems(url)
)

const initialState = {
  entities: {},
  loading: false
}

export const itemsListSlice = createSlice({
  name: ITEM_LIST,
  initialState,
  reducers: {
    resetItemsList: () => {
      return initialState
    }
  },
  extraReducers: {
    [fetchItemsList.pending]: (state) => {
      state.loading = true
    },
    [fetchItemsList.fulfilled]: (state, { payload }) => {
      state.loading = false
      state.entities = { ...state.entities, ...payload }
    },
    [fetchItemsList.rejected]: (state) => {
      state.loading = false
    }
  }
})

const { resetItemsList } = itemsListSlice.actions

export {
  resetItemsList,
  fetchItemsList
}

export default itemsListSlice.reducer
