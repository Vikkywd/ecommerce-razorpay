import { configureStore } from "@reduxjs/toolkit";
import productReducer from './slices/ProductSlice'
import cartReducer from './slices/CartSlice'
import userReducer from './slices/UserAuth';

const store = configureStore({
    reducer: {
        products: productReducer,
        cart : cartReducer,
        user: userReducer
    }
})

export default store;