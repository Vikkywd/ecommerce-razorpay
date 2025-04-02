import { configureStore } from "@reduxjs/toolkit";
import productReducer from './slices/ProductSlice'
import cartReducer from './slices/CartSlice'

const store = configureStore({
    reducer: {
        products: productReducer,
        cart : cartReducer
    }
})

export default store;