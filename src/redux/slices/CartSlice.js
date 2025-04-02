import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const addToCart = createAsyncThunk('users/add-cart', async (productData) => {
    const response = await fetch(`https://dummyjson.com/carts/add`,
        {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                userId: 1,
                products:productData
               
            })
        }
    )
    const data = await response.json();
    return data;
})

const getCartItem = createAsyncThunk('cart/get-cart-item', async(userId)=>{
console.log('userId:slice ', userId);
    try {
        const response = await fetch(`https://dummyjson.com/carts/${userId}`);
        const data = await response.json();
        console.log('data: get cart data', data);
        return data;
    } catch (error) {
    console.log('error: ', error);  
    }
    
})

const CartSlice = createSlice({
    name: 'carts',
    initialState: {
        item: [],
        cartData : [],
        success: false,
        error: null
    },
    extraReducers: (builders) => {
        builders.addCase(addToCart.fulfilled, (state, action) => {
            state.item = action.payload;
            state.success = true;
        })
        .addCase(getCartItem.fulfilled, (state, action)=>{
            state.cartData = action.payload;
            state.success = true;
        })
    }
});

export { addToCart, getCartItem };
export default CartSlice.reducer;