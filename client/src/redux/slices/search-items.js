import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { fetchItems } from '../../services'

const ITEM_LIST = 'itemList'

const fetchItemsList = createAsyncThunk(
  `${ITEM_LIST}/fetchItemsListStatus`,
  async (url) => {
    try {
      const response = await fetchItems(url)
      return response
    } catch (err) {
      throw new Error(err)
    }
  }
)

const initialState = {
  entities: {},
  loading: false,
  error: null
}

export const itemsListSlice = createSlice({
  name: ITEM_LIST,
  initialState,
  reducers: {
    resetItemsList: () => {
      return initialState
    }
  },
  extraReducers: (builder) => {
    builder.addCase(fetchItemsList.pending, (state, { payload }) => {
      state.loading = true
    })
    builder.addCase(fetchItemsList.fulfilled, (state, { payload }) => {
      state.loading = false
      state.entities = { ...state.entities, ...payload }
    })
    builder.addCase(fetchItemsList.rejected, (state, { error }) => {
      state.loading = false
      state.error = error.message
    })
  }
})

const { resetItemsList } = itemsListSlice.actions

export {
  resetItemsList,
  fetchItemsList
}

export default itemsListSlice.reducer
