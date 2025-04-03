import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const userLogin = createAsyncThunk('user/login', async (userData) => {
    try { 
        const {username, password} = userData
        const response = await fetch('https://dummyjson.com/auth/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                username: username,
                password: password,
            }),
        });
        const data = await response.json();
        return data
    } catch (error) {
        console.log('error: ', error);
    }
});

const userSlice = createSlice({
    name: 'user',
    initialState: {
        user : {},
        success: false,
        error : null
    },
    extraReducers: (builders)=>{
            builders
            .addCase(userLogin.fulfilled, (state,action)=>{
            console.log('action: ', action);
                state.user = action.payload;
                localStorage.setItem("userData", JSON.stringify(action.payload));
                localStorage.setItem("token", action.payload.accessToken);
            })
    }
})

export {userLogin};
export default userSlice.reducer;