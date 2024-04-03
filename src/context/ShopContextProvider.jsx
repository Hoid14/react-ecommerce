import { createContext, useEffect, useState } from "react"
import { PRODUCTS } from "../products"

export const ShopContext = createContext(null)

const getDefaultCart = () =>{
  let cart = {}
  for (let i=1; i<PRODUCTS.length+1;i++){
    cart[i]=0
  }
  return cart
}

export const ShopContextProvider = (props) => {
  const [cartItems, setcartItems] = useState(getDefaultCart())

  
  const saveToLocalStorage = (items) => {
    localStorage.setItem('cartItems', JSON.stringify(items))
  }
  const getTotalCartAmount = () => {
    let totalAmount = 0
    for (const item in cartItems){
      if (cartItems[item] > 0){
        let itemInfo = PRODUCTS.find(product=>product.id === Number(item))
        totalAmount += cartItems[item] * itemInfo.price
      }
    }

    return totalAmount
  }

  useEffect(()=>{
    const cartLocalStorage = JSON.parse(localStorage.getItem('cartItems'))
    if(cartLocalStorage){
      setcartItems(cartLocalStorage)
    }
  }, [])

  const addToCart = (itemId) => {
    const newCartList = {...cartItems, [itemId]: cartItems[itemId]+1}
    setcartItems(newCartList)
    saveToLocalStorage(newCartList)
  }

  const removeFromCart = (itemId) => {
    const newCartList = {...cartItems, [itemId]: cartItems[itemId]-1}
    setcartItems(newCartList)
    saveToLocalStorage(newCartList)
  }

  const updateCartItemCount = (newAmount, itemId) =>{
    const newCartList = {...cartItems, [itemId]: newAmount}
    setcartItems(newCartList)
    saveToLocalStorage(newCartList)
  }
  const resetCart = ()=>{
    PRODUCTS.map(product => {
        if (cartItems[product.id] !== 0) {
            return (
                cartItems[product.id]=0
            )
        }
    })
}

  const contextValue = {
    cartItems,
    addToCart,
    removeFromCart, 
    updateCartItemCount,
    getTotalCartAmount,
    resetCart,  
  }

  

  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  )
}
