import { configureStore } from '@reduxjs/toolkit'

import {
  itemReducer,
  searchItemsReducer,
  searchReducer
} from './slices'

const store = configureStore({
  reducer: {
    search: searchReducer,
    item: itemReducer,
    searchItems: searchItemsReducer
  }
})

export default store
