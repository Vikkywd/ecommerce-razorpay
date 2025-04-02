import React from "react";
import { Container, Button } from "react-bootstrap";
import { useSelector } from "react-redux";

const Checkout = () => {
    const cartData = useSelector((state) => state.cart.cartData);
    const totalAmount = cartData?.discountedTotal || 0;

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
            alert("Razorpay SDK failed to load. Please check your internet connection.");
            return;
        }

        if (!window.Razorpay) {
            alert("Razorpay is not available.");
            return;
        }

        const options = {
            key: "rzp_test_vzN8hoKk1JAewx", // This is Api key. you will get it from razorpay dashboard > account and settings > API keys
            amount: parseInt(totalAmount * 100),
            currency: "INR", // your 3 letter currency code
            name: "Ecommerce", // project or transaction name
            description: "Test Transaction",
            image: "https://avatars.githubusercontent.com/u/76506184?v=4", // your project logo
            handler: function (response) {
              console.log("response razor payyy", response);
              orderPlace(); // after payment completes on stripe this function will be called and you can do your stuff
            },
            prefill: {
              name: "Vikky Mishra",
              email: "vikky890@gmail.com",
              contact: "99810306789",
            },
            notes: {
              address: "India",
            },
            theme: {
              color: "#158993",
            },
          };

        const razorpayInstance = new window.Razorpay(options);
        razorpayInstance.open();
    };

    return (
        <Container className="mt-5 text-center">
            <h2>Checkout</h2>
            <p>Complete your payment securely using Razorpay.</p>
            <h4>Total Payable: ₹{totalAmount.toFixed(2)}</h4>
            <Button variant="success" size="lg" className="mt-3 mb-5" onClick={handlePayment}>
                Pay with Razorpay
            </Button>
        </Container>
    );
};

export default Checkout;
