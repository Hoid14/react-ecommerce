
import './App.css'
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import { Navbar } from './components/Navbar'
import { Shop } from './pages/shop/Shop'
import { Cart } from './pages/cart/Cart'
import { ShopContextProvider } from './context/ShopContextProvider'
import { Pay } from './pages/cart/Pay'



function App() {
  return (

    <div>
      <ShopContextProvider>
        <Router>
          <Navbar/>
          <Routes>
            <Route path="/" element={<Shop/>}/>
            <Route path="/cart" element={<Cart/>}/>
            <Route path="/pay" element={<Pay/>}/>


          </Routes>
        </Router>
      </ShopContextProvider>
      
    </div>
  )
}

export default App
