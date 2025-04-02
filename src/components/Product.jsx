import React, { useEffect, useState } from "react";
import { Button, Card, Col, Container, Row, Spinner } from "react-bootstrap";
import "./style.css"
import { useSelector, useDispatch } from "react-redux";
import { getAllProducts } from "../redux/slices/ProductSlice";
import { Navigate, useNavigate } from "react-router-dom";

const Products = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [imageLoaded, setImageLoaded] = useState({});


    useEffect(() => {
        dispatch(getAllProducts())
    }, [dispatch])
    const {products} = useSelector((state)=> state.products); 

    const handleImageLoad = (id) => {
        setImageLoaded((prev) => ({ ...prev, [id]: true }));
    };


    return (
        <Container id="products" className="mt-5">
            <h2 className="text-center">Featured Handcrafted Products</h2>
            <Row className="justify-content-center">

                {products && products?.products?.length ?
                  products.products.map((products) => (
                        <Col sm={12} md={6} lg={4}>
                            <Card className="mb-4 shadow-sm">
                            <div style={{ height: "200px", display: "flex", alignItems: "center", justifyContent: "center", background: "#f8f9fa" }}>
                                    {!imageLoaded[products.id] && <Spinner animation="border" variant="primary" />}
                                    <Card.Img
                                        variant="top"
                                        src={products.thumbnail}
                                        onLoad={() => handleImageLoad(products.id)}
                                        style={{ display: imageLoaded[products.id] ? "block" : "none", height: "200px", objectFit: "cover" }}
                                    />
                                    </div>

                                {/* <Card.Img variant="top" src={products.thumbnail} /> */}
                                <Card.Body>
                                    <Card.Title> {products.title}</Card.Title>
                                    <Card.Text>${products.price}</Card.Text>
                                    <Button onClick={()=> navigate(`/product/${products?.id}`)} variant="danger" className="w-100">Buy Now</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))
                    : <div>no card</div>
                }

            </Row>
        </Container>
    )
}

export default Products