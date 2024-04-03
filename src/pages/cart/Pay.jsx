import { useContext } from "react"
import { ShopContext } from "../../context/ShopContextProvider"
import { PRODUCTS } from "../../products"
import { PayItem } from "./PayItem"

import './pay.css'
import { useNavigate } from "react-router-dom"
export const Pay = () => {
    
    const {cartItems, getTotalCartAmount, resetCart} =useContext(ShopContext)

    const navigate = useNavigate()
    const totalAmount = getTotalCartAmount()
    
    const payConfirmation = () =>{
        resetCart()
        navigate('/pay-confirmation')
    }

    

  return (
    <div className="pay">
        <div>
            <h1>Tu factura</h1>
        </div>
        <div className="table">
            <table>
                <thead>
                    <tr>
                        <th>Producto</th>
                        <th>Cantidad</th>
                        <th>Precio individual</th>
                        <th>Precio total</th>
                    </tr>
                </thead>
                <tbody>
                    {PRODUCTS.map(product => {
                        if (cartItems[product.id] !== 0) {
                            return (
                                <PayItem key={product.id} data={product} />
                            )
                        }
                    })}
                </tbody>
            </table>
            
        </div>
        <h3>Total a pagar: {totalAmount}</h3>
        <button className="bttn-confirm" onClick={()=>payConfirmation()}>Confirmar pago</button>

    </div>
  )
}
