import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const getAllProducts = createAsyncThunk('products/get-all-products', async()=>{
        try {
            const response = await fetch('https://dummyjson.com/products');
            const data = await response.json();
            console.log('data:>>>> ', data);
            return data;            
        } catch (error) {
        console.log('error: ', error);
        }
});

const singleProductDetails = createAsyncThunk('product/single-product', async(productId)=>{
        try {
            const resposne = await fetch(`https://dummyjson.com/products/${productId}`);
            const data = await resposne.json();
            return data;
        } catch (error) {
        console.log('error: ', error);
            
        }
})

const ProductSlice = createSlice({
    name: 'products',
    initialState: {
        products: [],
        singleProduct : {},
        success: true,
        error: false
    },
    reducers: {},
    extraReducers : (builders)=>
        builders.addCase(getAllProducts.fulfilled, (state, action)=>{
            state.products = action.payload;
            state.success = true;
        })
        .addCase(singleProductDetails.fulfilled, (state,action)=>{
            state.singleProduct = action.payload;
            state.success = true;
        })
})

export {getAllProducts, singleProductDetails}

export default ProductSlice.reducer