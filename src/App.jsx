import { Provider } from 'react-redux'
import { setupStore } from './redux/store'
import './styles/index.scss'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from './components/Layout'
import { SearchResultPage, ProductDetailPage, ErrorPage } from './pages'
const store = setupStore()

function App () {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route path='items' element={<SearchResultPage />} />
            <Route path='items/:id' element={<ProductDetailPage />} />
            <Route path='*' element={<ErrorPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  )
}

export default App
