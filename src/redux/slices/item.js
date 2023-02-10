import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { ItemEmptyState } from '../../models'
import { fetchItemDetail } from '../../services'

const ITEM = 'item'

const fetchItem = createAsyncThunk(
  `${ITEM}/fetchItemStatus`,
  async (url) => await fetchItemDetail(url)
)

const initialState = {
  entities: ItemEmptyState,
  loading: false
}

export const itemSlice = createSlice({
  name: ITEM,
  initialState,
  reducers: {
    resetItem: () => {
      return ItemEmptyState
    }
  },
  extraReducers: {
    [fetchItem.pending]: (state) => {
      state.loading = true
    },
    [fetchItem.fulfilled]: (state, { payload }) => {
      state.loading = false
      state.entities = { ...state.entities, ...payload }
    },
    [fetchItem.rejected]: (state) => {
      state.loading = false
    }
  }
})

const { resetItem } = itemSlice.actions

export {
  resetItem,
  fetchItem
}

export default itemSlice.reducer
