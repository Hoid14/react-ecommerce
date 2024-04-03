import { ShoppingCart } from "phosphor-react"
import { Link } from "react-router-dom"
import "./navbar.css"
import { ShopContext } from "../context/ShopContextProvider"
import { useContext } from "react"

export const Navbar = () => {
  
  const {getTotalItems}=useContext(ShopContext)

  return (
    <div className="navbar">

        <div className="links">
            <Link className = "shopNavbar" to="/">Ir a la tienda</Link>
            <Link className = "shoppingCart" to="/cart">
              
                <div className="cart-icon">
                  <ShoppingCart size={32} /> 
                </div>
                <div className="total-items">
                  ({getTotalItems()})
                </div>
                
              
            </Link>

        </div>
    </div>
  )
}
