import { useContext } from "react"
import { ShopContext } from "../../context/ShopContextProvider"
import { PRODUCTS } from "../../products"
import { PayItem } from "./PayItem"
import { useNavigate } from "react-router-dom"

export const Pay = () => {
    
    const {cartItems, getTotalCartAmount} =useContext(ShopContext)

    const totalAmount = getTotalCartAmount()
    const navigate = useNavigate()
    const payConfirmation = ()=>{
        PRODUCTS.map(product => {
            if (cartItems[product.id] !== 0) {
                return (
                    cartItems[product.id]=0
                )
            }
        })
        navigate("/pay-confirmation")
    }
  return (
    <div className="pay">
        <div>
            <h1>Tu factura</h1>
        </div>
        <div>
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
        <div>Total a pagar: {totalAmount}</div>
        <button onClick={()=>payConfirmation()}>Confirmar pago</button>

    </div>
  )
}
