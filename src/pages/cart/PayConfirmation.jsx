import { useNavigate } from "react-router-dom"
import './payConfirmation.css'
export const PayConfirmation = () => {
    const navigate = useNavigate()
  return (
    <div className="pay-confirmation">
        <h1>Gracias por su compra</h1>
        <button className="bttn-keep" onClick={()=>navigate("/")}>Seguir comprando</button>
    </div>
    
  )
}
