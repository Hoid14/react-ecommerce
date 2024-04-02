import { useContext } from "react"
import { ShopContext } from "../../context/ShopContextProvider"

export const PayItem = (props) => {
    const {id, productName, price} = props.data

    const {cartItems} =useContext(ShopContext)
    

  return (
            
                <tr>
                    <td>{productName}</td>
                    <td>{cartItems[id]}</td>
                    <td>{price}</td>
                    <td>{cartItems[id]*price}</td>
                </tr>
        
  )
}
