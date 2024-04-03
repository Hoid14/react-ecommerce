import { ShoppingCart } from "phosphor-react"
import { Link } from "react-router-dom"
import "./navbar.css"
import { ShopContext } from "../context/ShopContextProvider"
import { useContext } from "react"

export const Navbar = () => {
  
  const {getTotalItems}=useContext(ShopContext)

  console.log("navbar total items",getTotalItems())

  return (
    <div className="navbar">

        <div className="links">
            <Link to="/">Ir a la tienda</Link>
            <Link to="/cart">
              <div className="shoppingCart">
                <ShoppingCart size={32} /> ({getTotalItems()})
              </div>
            </Link>

        </div>
    </div>
  )
}
