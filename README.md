# Handcraft E-Commerce

A modern handcrafted e-commerce application built with React, Redux Toolkit, Bootstrap, and Razorpay for secure payments.

## Author

**Vikky Mishra**

## Features

- User-friendly UI with Bootstrap styling
- Cart management using Redux Toolkit
- Razorpay integration for secure payments
- Dynamic product list from a dummy API
- Responsive and optimized design

## Technologies Used

- React.js (Vite)
- Redux Toolkit (State Management)
- React-Bootstrap (UI Components)
- Razorpay (Payment Gateway)
- DummyJSON API (Mock Data)

## Installation

1. Clone the repository:
   ```sh
   git clone https://github.com/your-repo/handcraft-ecommerce.git
   cd handcraft-ecommerce
   ```

2. Install dependencies:
   ```sh
   npm install
   ```

3. Start the development server:
   ```sh
   npm run dev
   ```

## Dummy API Integration

This project fetches product and cart details from the DummyJSON API:
- **Products API:** `https://dummyjson.com/products`
- **Cart API:** `https://dummyjson.com/carts/1`

Redux Toolkit is used to manage state:
```js
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const getCartItem = createAsyncThunk("cart/getCartItem", async (userId) => {
    const response = await fetch(`https://dummyjson.com/carts/${userId}`);
    return response.json();
});

const cartSlice = createSlice({
    name: "cart",
    initialState: { cartData: {} },
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getCartItem.fulfilled, (state, action) => {
            state.cartData = action.payload;
        });
    },
});

export default cartSlice.reducer;
```

## Razorpay Payment Integration

The checkout process is handled with Razorpay:
```js
const loadScript = (src) => {
    return new Promise((resolve) => {
        const script = document.createElement("script");
        script.src = src;
        script.onload = () => resolve(true);
        script.onerror = () => resolve(false);
        document.body.appendChild(script);
    });
};

const handlePayment = async () => {
    const res = await loadScript("https://checkout.razorpay.com/v1/checkout.js");
    if (!res) {
        alert("Razorpay SDK failed to load. Check your internet connection.");
        return;
    }

    const options = {
        key: "rzp_test_AWrlyaXOO9ncih",
        amount: totalAmount * 100,
        currency: "INR",
        name: "Handcraft Store",
        description: "Secure Payment",
        handler: (response) => {
            alert(`Payment successful! Payment ID: ${response.razorpay_payment_id}`);
        },
    };

    const razorpayInstance = new window.Razorpay(options);
    razorpayInstance.open();
};
```

## Project Structure

```
📂 handcraft-ecommerce
 ┣ 📂 src
 ┃ ┣ 📂 components
 ┃ ┃ ┣ 📜 Cart.jsx
 ┃ ┃ ┣ 📜 Checkout.jsx
 ┃ ┃ ┣ 📜 Navbar.jsx
 ┃ ┣ 📂 pages
 ┃ ┃ ┣ 📜 Home.jsx
 ┃ ┃ ┣ 📜 About.jsx
 ┃ ┃ ┣ 📜 Contact.jsx
 ┃ ┣ 📂 redux
 ┃ ┃ ┣ 📂 slices
 ┃ ┃ ┃ ┣ 📜 CartSlice.js
 ┃ ┃ ┣ 📜 store.js
 ┣ 📜 package.json
 ┣ 📜 README.md
```

## Deployment

For production build:
```sh
npm run build
```
To deploy using Vercel:
```sh
vercel
```

## License

This project is licensed under the MIT License.

