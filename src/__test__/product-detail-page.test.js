import React from 'react'
import { fireEvent, getByTestId, screen, waitFor } from '@testing-library/react'
import { renderWithProviders } from '../utils/test-utils'
import ProductDetailPage from '../pages/product-detail/ProductDetail'

const defaultState = {
  entities: {
    author: {
      name: 'User',
      lastname: 'Default'
    },
    item: {
      id: 'MLA1194328250',
      title: 'Tcl 305 64 Gb  Space Gray 2 Gb Ram',
      price: { currency: 'ARS', amount: 29399, decimals: 0 },
      picture: 'https: //http2.mlstatic.com/D_685006-MLA51057566638_082022-O.jpg',
      condition: 'new',
      free_shipping: true,
      sold_quantity: 200
    }
  },
  loading: false,
  error: null
}
jest.mock('../utils/ErrorBoundaries', () => ({
  __esModule: true,
  ErrorFallback: () => <div>Mocked Username Field</div>
}))

jest.mock('../components/ErrorFallback', () => ({
  __esModule: true,
  ErrorFallback: () => <div>Mocked Username Field</div>
}))

jest.mock('../pages/product-detail/hooks/useDescription', () => ({
  __esModule: true,
  useDescription: () => ({
    description: 'Una bella descripcion',
    loading: false,
    error: false
  })
}))

describe('ProductDetailPage', () => {
  describe('Happy path', () => {
    xtest('should show loading message', () => {
      renderWithProviders(<ProductDetailPage />,
        {
          preloadedState: {
            item: defaultState
          },
          route: '/item/MLA1194328250'
        })
      expect(screen.getByText(/Cargando/i)).toBeInTheDocument()
    })

    test('should show a product image', async () => {
      renderWithProviders(<ProductDetailPage />,
        {
          preloadedState: {
            item: defaultState
          },
          route: '/item/MLA1194328250'
        })
      expect(screen.getByText(/Cargando/i)).toBeInTheDocument()

      await waitFor(() => {
        screen.debug()
      }, { timeout: 5000 })
    })
  })
})
