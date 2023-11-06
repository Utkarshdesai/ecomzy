import { configureStore } from "@reduxjs/toolkit";
import cart from "./Slice/Cartslice";

//configure store 
export const store = configureStore( {
    reducer: {
        allcart : cart
    }
})