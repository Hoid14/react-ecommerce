import { useContext } from "react"
import { PRODUCTS } from "../../products"
import { ShopContext } from "../../context/ShopContextProvider"
import { CartItem } from "./CartItem"
import './cart.css'
import { useNavigate } from "react-router-dom"

export const Cart = () => {
    const {cartItems, getTotalCartAmount}=useContext(ShopContext)
    const totalAmount = getTotalCartAmount()

    const navigate = useNavigate()
  return (
    <div className="cart">
        <div>
            <h1>Tu carrito de productos</h1>
        </div>
        <div className="cartItems">
            {PRODUCTS.map(product =>{
                if(cartItems[product.id] !==0){
                    return <CartItem key={product.id} data = {product} />
                }
            })}
        </div>
        {totalAmount>0 ?(
        <div className="checkout">
            
            <p> Subtotal: ${totalAmount}</p>
            <button onClick={()=>navigate("/")}>Seguir comprando</button>
            <button onClick={()=>navigate("/pay")}>Pagar</button>
        </div>
        ) : (
        <h1>Tu carrito esta vacio</h1>
        )}
        
        
        
    </div>
  )
}
