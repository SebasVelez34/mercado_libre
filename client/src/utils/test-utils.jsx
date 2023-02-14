import React from 'react'
import { render } from '@testing-library/react'
import { Provider } from 'react-redux'
import { setupStore } from '../redux/store'
import { BrowserRouter } from 'react-router-dom'

export function renderWithProviders (
  ui,
  {
    preloadedState = {},
    route = '/',
    // Automatically create a store instance if no store was passed in
    store = setupStore(preloadedState),
    ...renderOptions
  } = {}
) {
  function Wrapper ({ children }) {
    return (
      <Provider store={store}>
        <BrowserRouter>
          {children}
        </BrowserRouter>
      </Provider>
    )
  }
  window.history.pushState({}, 'Test page', route)
  return {
    store,
    ...render(ui, { wrapper: Wrapper, ...renderOptions })
  }
}
