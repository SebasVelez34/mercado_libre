import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { ItemEmptyState } from '../../models'
import { fetchItemDetail } from '../../services'

const ITEM = 'item'

const fetchItem = createAsyncThunk(
  `${ITEM}/fetchItemStatus`,
  async (url) => {
    try {
      const response = await fetchItemDetail(url)
      return response
    } catch (err) {
      throw new Error(err)
    }
  }
)

const initialState = {
  entities: ItemEmptyState,
  loading: false,
  error: null
}

export const itemSlice = createSlice({
  name: ITEM,
  initialState,
  reducers: {
    resetItem: () => {
      return ItemEmptyState
    }
  },
  extraReducers: (builder) => {
    builder.addCase(fetchItem.pending, (state, { payload }) => {
      state.loading = true
    })
    builder.addCase(fetchItem.fulfilled, (state, { payload }) => {
      state.loading = false
      state.entities = { ...state.entities, ...payload }
    })
    builder.addCase(fetchItem.rejected, (state, { error }) => {
      state.loading = false
      state.error = error.message
    })
  }
})

const { resetItem } = itemSlice.actions

export {
  resetItem,
  fetchItem
}

export default itemSlice.reducer
