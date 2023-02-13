import { configureStore } from '@reduxjs/toolkit'

import {
  itemReducer,
  searchItemsReducer,
  searchReducer
} from './slices'

const rootReducer = {
  search: searchReducer,
  item: itemReducer,
  searchItems: searchItemsReducer
}

export const setupStore = preloadedState => {
  return configureStore({
    reducer: rootReducer,
    preloadedState
  })
}
