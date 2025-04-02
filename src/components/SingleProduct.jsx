import React, { useEffect, useState } from "react";
import { Badge, Button, Card, Col, Container, Row, Carousel } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { singleProductDetails } from "../redux/slices/ProductSlice";
import { addToCart, getCartItem } from "../redux/slices/CartSlice";
import { ToastContainer, toast } from 'react-toastify'; // Import ToastContainer and toast from react-toastify
import 'react-toastify/dist/ReactToastify.css';

const SingleProduct = () => {
    const { productId } = useParams();
    const dispatch = useDispatch();
    const [quantity, setQuantity] = useState(1); 
    const [disable, setDisable] = useState(false)
    const { singleProduct } = useSelector((state) => state.products);
    const product = singleProduct;
    const {success} = useSelector((state)=> state.cart)

    useEffect(() => {
        dispatch(singleProductDetails(productId));
    }, [dispatch, productId]);

    const handleAddToCart = ()=>{
        setDisable(true);
        let productData = [];
        productData.push({id:productId, quantity})
        dispatch(addToCart(productData))
        if(success) {
            dispatch(getCartItem(5))
            toast.success(`${product.title} added to the cart successfully!`);
        } 
    }

    const handleDecrease  = ()=>{
        setQuantity(quantity - 1)
    }

    const handleIncrease = ()=>{
        setQuantity(quantity + 1)
    }

    return (
        <Container className="mt-5 mb-5">
        <Row className="justify-content-center">
            <Col md={10} lg={8}>
                {product ? (
                    <Card className="shadow-lg p-4 rounded">
                        <Row>
                            {/* Product Images - Carousel */}
                            <Col md={6} className="text-center">
                                <Carousel>
                                    {product?.images?.map((img, index) => (
                                        <Carousel.Item key={index}>
                                            <Card.Img
                                                variant="top"
                                                src={img}
                                                className="rounded product-img"
                                                style={{ height: "300px", objectFit: "cover" }}
                                            />
                                        </Carousel.Item>
                                    ))}
                                </Carousel>
                            </Col>

                            {/* Product Details */}
                            <Col md={6}>
                                <Card.Body>
                                    <h2 className="fw-bold">{product.title}</h2>
                                    <p className="text-muted">{product.description}</p>

                                    {/* Price */}
                                    <h3 className="text-success fw-bold">${product.price}</h3>

                                    {/* Category & Rating */}
                                    <div className="mb-3">
                                        <Badge bg="info" className="me-2">
                                            {product.category}
                                        </Badge>
                                        <Badge bg="warning" text="dark">
                                            ⭐ {product.rating}
                                        </Badge>
                                    </div>

                                    {/* Quantity Selector */}
                                    <div className="d-flex align-items-center mb-3">
                                        <Button 
                                            variant="outline-secondary" 
                                            onClick={handleDecrease} 
                                            disabled={quantity <= 1}
                                        >
                                            -
                                        </Button>
                                        <span className="mx-3">{quantity}</span>
                                        <Button variant="outline-secondary" onClick={handleIncrease}>
                                            +
                                        </Button>
                                    </div>

                                    {/* Add to Cart Button */}
                                    <Button
                                        variant="danger"
                                        size="lg"
                                        className="w-100 mt-3"
                                        onClick={handleAddToCart}
                                        disabled={disable}
                                    >
                                        Add to Cart
                                    </Button>
                                </Card.Body>
                            </Col>
                        </Row>
                    </Card>
                ) : (
                    <div className="text-center">Loading product details...</div>
                )}
            </Col>
        </Row>
        <ToastContainer position="top-right" autoClose={3000} />
    </Container>
    );
};

export default SingleProduct;
