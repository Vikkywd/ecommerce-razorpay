import React from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
const aboutImgOne = 'https://plus.unsplash.com/premium_photo-1664201890375-f8fa405cdb7d?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D';

const aboutImgTwo = 'https://plus.unsplash.com/premium_photo-1682962818935-4e22d37fc54c?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'

const About = ()=>{
    return (
        <Container className="mt-5">
            <Row className="justify-content-center text-center">
                <Col md={8}>
                    <h2 className="mb-4">About Us</h2>
                    <p className="lead text-muted">
                        Welcome to <strong>Artisan Haven</strong>, your gateway to exquisite handcrafted treasures.
                        Our journey began with a passion for celebrating craftsmanship and empowering artisans.
                        Each product in our collection tells a story, meticulously crafted by skilled hands.
                    </p>
                </Col>
            </Row>

            <Row className="mt-5">
                <Col md={6} className="mb-4">
                    <Card className="shadow border-0">
                        <Card.Img variant="top" src={aboutImgOne} alt="Handcrafted Products" />
                        <Card.Body>
                            <Card.Title>Our Mission</Card.Title>
                            <Card.Text>
                                We bridge the gap between artisans and customers by offering unique, sustainable, 
                                and ethically sourced handmade products. Your purchase supports small businesses 
                                and keeps traditional artistry alive.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>

                <Col md={6} className="mb-4">
                    <Card className="shadow border-0">
                        <Card.Img variant="top" src={aboutImgTwo} alt="Artisans at Work" />
                        <Card.Body>
                            <Card.Title>Why Choose Us?</Card.Title>
                            <Card.Text>
                                Every item in our store is crafted with love, precision, and authenticity. 
                                From handcrafted jewelry to bespoke home decor, our creations bring warmth 
                                and character to your space.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>

            <Row className="text-center mt-5">
                <Col>
                    <Button variant="primary" size="lg" className="mb-5">Explore Our Collection</Button>
                </Col>
            </Row>
        </Container>
    )
}

export default About;