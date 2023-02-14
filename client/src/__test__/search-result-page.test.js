import React from 'react'
import { fireEvent, getByTestId, screen, waitFor } from '@testing-library/react'
import { renderWithProviders } from '../utils/test-utils'
import ProductDetailPage from '../pages/product-detail/ProductDetail'

describe('ProductDetailPage', () => {
  describe('Happy path', () => {
    test('fetches & receives a user after clicking the fetch user button', async () => {
      global.fetch = jest.fn(() => Promise.resolve({ json: () => '' }))
      renderWithProviders(<ProductDetailPage />)
      expect(await screen.getByText(/Cargando/i)).toBeInTheDocument()
      expect(await screen.findByText(/Descripción del producto/i)).toBeInTheDocument()
    })
  })
})
