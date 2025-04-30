 
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import Products from './components/Products'
import {BrowserRouter as Router , Routes , Route} from "react-router"
import All_Product from './components/All_Product'
import Product_detail from "./pages/Product_detail"
import Cart from "./pages/Cart"
import ProductByCategory from "./pages/ProductByCategory"
import Search_Product from "./pages/Search_Product"
import Trending_slider from './components/Trending_slider'

function App() {
 

  return (
  <Router>
    <Navbar/>
    <Routes>
      <Route path='/' element={<All_Product />} />
      <Route path='/cart' element={<Cart/>}/>
      <Route path='/product/:id' element={<Product_detail />} />
      <Route path='/product/category/:cat' element={<ProductByCategory/>} />
      <Route path='/product/search/:term' element={<Search_Product/>} />
    </Routes>
    <Trending_slider/>
  </Router>
  )
}

export default App
