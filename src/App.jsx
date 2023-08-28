
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { Routes,Route } from 'react-router-dom'
import Home from './pages/Home'
import Cart from './pages/Cart'
import SingleItemPage from './pages/SingleItemPage'
import Products from './pages/Products'

function App() {

  return (
    <>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/cart' element={<Cart/>}/>
      <Route path='/singleItemInfo' element={<SingleItemPage/>}/>
      <Route path='/products' element={<Products/>}/>
    </Routes>
       
    </>
  )
}

export default App
