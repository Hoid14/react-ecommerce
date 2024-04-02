import { useNavigate } from "react-router-dom"

export const PayConfirmation = () => {
    const navigate = useNavigate()
  return (
    <div>
        <h1>Gracias por su compra</h1>
        <button onClick={()=>navigate("/")}>Seguir comprando</button>
    </div>
    
  )
}
