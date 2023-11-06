import { createSlice } from "@reduxjs/toolkit";

//
const initialState = {
    cart: [] ,
}
 
//create slice with name initialstate and function like add to cart and remove to cart
const cartslice  = createSlice( 
    {
      name:"cart",
      initialState,
      reducers : {
         add : (state,action) => {
            state.cart.push(action.payload)
         },
         remove : (state,action)=> {
             state.cart = state.cart.filter((card) => card.id !== action.payload)
         },
      }
    }
)

export const {add ,remove} = cartslice.actions 
export default cartslice.reducer
