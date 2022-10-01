import React, { useReducer } from 'react'
import { createContext } from 'react';
import { useContext } from 'react';
import {cartReducer} from '../context/Reducer'

export const ACTIONS = {
    ADD_CART : 'add',
    REMOVE_CART : 'remove',
    CHANGE_QWT:'quantity',
    LIKE:'like',
    REMOVE_LIKE:'remove-like',
    VIEWADDCART:'VIEWADDCART'
}

 const Cart = createContext();

 
 
 

 function Context({children}) {
    const [state, dispatch] = useReducer(cartReducer, {
      cart:[],
      like:[]
    })
    // console.log(state)
  return (
    <Cart.Provider value={{state,dispatch}} >{children}</Cart.Provider>
  )
}

// export const cartState =()=>{
//     return useContext(Cart)
// }
export const CartState = () => {
    return useContext(Cart);
  };
export default Context
