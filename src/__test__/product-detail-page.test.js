import React from 'react'
import { fireEvent, getByTestId, screen, waitFor } from '@testing-library/react'
import { renderWithProviders } from '../utils/test-utils'
import ProductDetailPage from '../pages/product-detail/ProductDetail'

const response = {
  entities: {
    author: {
      name: 'Sebastiancho',
      lastname: 'Velez'
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
  loading: true

}

describe('ProductDetailPage', () => {
  describe('Happy path', () => {
    test('fetches & receives a user after clicking the fetch user button', async () => {
      global.fetch = jest.fn(() => Promise.resolve({ json: () => '' }))
      const { user } = renderWithProviders(<ProductDetailPage />,
        {
          preloadedState: {
            item: response
          },
          route: '/item/MLA1194328250'
        })
      expect(await screen.getByText(/Cargando/i)).toBeInTheDocument()
      expect(await screen.findByText(/Descripción del producto/i)).toBeInTheDocument()
      await waitFor(() => {
        screen.debug()
      }, { timeout: 5000 })
      expect(await screen.findByText(/Vendidos/i, undefined, { timeout: 3000 })).toBeInTheDocument()
    })
  })
})
