import { Provider } from 'react-redux'
import store from './redux/store'
import './styles/index.scss'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from './components/Layout'
import SearchResultPage from './pages/search-result/SearchResult'
import ProductDetailPage from './pages/product-detail/ProductDetail'

function App () {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route path='items' element={<SearchResultPage />} />
            <Route path='items/:id' element={<ProductDetailPage />} />
            <Route path='*' element={<>No encontramos nada</>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  )
}

export default App
