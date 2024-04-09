
import { Route, Routes } from 'react-router-dom'
import './App.css'
import CategoryDetail from './components/CategoryDetail'
import LayoutWebsite from './components/Layoutwebsite'
import Update from './components/Update'
import LayoutAdmin from './components/layout/LayoutAdmin'
import ProductDetail from './pages/detail-product'
import HomePage from './pages/home'
import ProductPage from './pages/shop'

import 'tailwindcss/tailwind.css'
import Add from './components/Add'
import ListAdmin from './components/ListAdmin'
import Signin from './pages/Signin'
import CartPage from './pages/CartPage'
import OrderPage from './pages/OrderPage'
function App() {
  return (
    <>

      <Routes>
        <Route path='admin' element={<LayoutAdmin />}>
          <Route path='products' element={<ListAdmin />} />
          <Route path='add' element={<Add />} />
          <Route path='update/:id' element={<Update />} />
        </Route>

        <Route path='/' element={<LayoutWebsite />}>
          <Route index element={<HomePage />}></Route>
          <Route path='shop' element={<ProductPage />}></Route>
          <Route path='lognin' element={<Signin />}></Route>
          <Route path='cart' element={<CartPage />}></Route>
          <Route path='order' element={<OrderPage />}></Route>
          <Route path='products/:id' element={<ProductDetail />}></Route>
          <Route path='categorys/:id' element={<CategoryDetail />}></Route>
        </Route>

      </Routes >
    </>
  )
}

export default App
