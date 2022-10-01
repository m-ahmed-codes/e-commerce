import {ACTIONS} from '../context/Context'
export const cartReducer = (state,action)=>{
    console.log('action', action)
    console.log('state',state)
    switch (action.type) {
        case ACTIONS.ADD_CART:
            return {...state, cart:[...state.cart,{...action.payload,qty:1 }]}
        case ACTIONS.LIKE:
            return {...state, like:[...state.like,{...action.payload}]}
        case ACTIONS.REMOVE_CART:
            return {...state, cart: state.cart.filter((e)=> e.id !== action.payload.id )}
        case ACTIONS.REMOVE_LIKE:
            return {...state, like: state.like.filter((e)=> e.id !== action.payload.id )}
        case ACTIONS.CHANGE_QWT:
            return {
                ...state,
                cart: state.cart.filter((c) =>
                  c.id === action.payload.id ? (c.qty = action.payload.qty) : c.qty
                )
              };
        case ACTIONS.VIEWADDCART:
            return {...state, cart:[...state.cart,{...action.payload.data,qty:action.payload.val }]};

            
            
    
        default:
            return state
            
    }


    
}