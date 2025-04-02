import React, { useEffect } from "react";
import { Table, Container, Button } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { getCartItem } from "../redux/slices/CartSlice";
import { useNavigate } from "react-router-dom";

const Cart = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const cartData = useSelector((state) => state.cart.cartData);

    useEffect(() => {
        dispatch(getCartItem(1)); // Fetch cart for user ID 1
    }, [dispatch]);

    const cartItems = cartData?.products || [];
    const totalPrice = cartData?.total || 0;
    const discountedTotal = cartData?.discountedTotal || 0;

    return (
        <Container className="mt-5">
            <h2 className="mb-4 text-center">Your Cart</h2>

            {cartItems.length > 0 ? (
                <>
                    <Table striped bordered hover responsive className="shadow">
                        <thead className="table-dark">
                            <tr>
                                <th>#</th>
                                <th>Product</th>
                                <th>Price</th>
                                <th>Quantity</th>
                                <th>Subtotal</th>
                                <th>Discounted Price</th>
                            </tr>
                        </thead>
                        <tbody>
                            {cartItems.map((item, index) => (
                                <tr key={item.id}>
                                    <td>{index + 1}</td>
                                    <td>
                                        <img
                                            src={item.thumbnail}
                                            alt={item.title}
                                            style={{ width: "50px", height: "50px", marginRight: "10px" }}
                                        />
                                        {item.title}
                                    </td>
                                    <td>${item.price.toFixed(2)}</td>
                                    <td>{item.quantity}</td>
                                    <td>${item.total.toFixed(2)}</td>
                                    <td className="text-success">${item.discountedTotal.toFixed(2)}</td>
                                </tr>
                            ))}
                        </tbody>
                    </Table>

                    {/* Cart Summary */}
                    <div className="d-flex justify-content-between align-items-center p-3 border-top">
                        <h4>Total Price: ${totalPrice.toFixed(2)}</h4>
                        <h4 className="text-success">Discounted Total: ${discountedTotal.toFixed(2)}</h4>
                    </div>

                    {/* Checkout Button */}
                    <div className="text-center mt-4 mb-5"> {/* Added mb-5 for spacing */}
                        <Button variant="primary" size="lg" onClick={() => navigate("/checkout")}>
                            Proceed to Checkout
                        </Button>
                    </div>
                </>
            ) : (
                <p className="text-center">Your cart is empty.</p>
            )}
        </Container>
    );
};

export default Cart;
