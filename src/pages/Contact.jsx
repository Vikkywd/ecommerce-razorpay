import React from "react";
import { Container, Row, Col, Card, Form, Button } from "react-bootstrap";
import { FaMapMarkerAlt, FaEnvelope, FaPhone, FaClock } from "react-icons/fa";

const Contact = () => {
    return (
        <Container className="mt-5">
            <h2 className="text-center mb-4">Contact Us</h2>
            <Row className="justify-content-between">
                {/* Contact Details (Left Side) */}
                <Col md={4} className="mb-4 d-flex flex-column justify-content-center">
                    <h4 className="mb-4 text-primary">Get in Touch</h4>
                    <p className="text-muted">
                        We'd love to hear from you! Reach out to us using the contact details below.
                    </p>
                    <div className="mb-3 d-flex align-items-start">
                        <FaMapMarkerAlt className="text-primary me-3 mt-1" size={24} />
                        <p className="mb-0"><strong>Address:</strong> 123 Artisan Street, Handmade City, 56789</p>
                    </div>
                    <div className="mb-3 d-flex align-items-start">
                        <FaEnvelope className="text-primary me-3 mt-1" size={24} />
                        <p className="mb-0"><strong>Email:</strong> support@artisanhaven.com</p>
                    </div>
                    <div className="mb-3 d-flex align-items-start">
                        <FaPhone className="text-primary me-3 mt-1" size={24} />
                        <p className="mb-0"><strong>Phone:</strong> +91 98765 43210</p>
                    </div>
                    <div className="mb-3 d-flex align-items-start">
                        <FaClock className="text-primary me-3 mt-1" size={24} />
                        <p className="mb-0"><strong>Hours:</strong> Mon - Sat, 9 AM - 6 PM</p>
                    </div>
                </Col>

                {/* Contact Form (More Right) */}
                <Col md={{ span: 5, offset: 2 }}>
                    <Card className="shadow-lg border-0 p-4">
                        <h4 className="mb-4 text-primary">Send Us a Message</h4>
                        <Form>
                            <Form.Group className="mb-3">
                                <Form.Label className="fw-bold">Full Name</Form.Label>
                                <Form.Control type="text" placeholder="Enter your name" className="p-2" />
                            </Form.Group>

                            <Form.Group className="mb-3">
                                <Form.Label className="fw-bold">Email Address</Form.Label>
                                <Form.Control type="email" placeholder="Enter your email" className="p-2" />
                            </Form.Group>

                            <Form.Group className="mb-3">
                                <Form.Label className="fw-bold">Message</Form.Label>
                                <Form.Control as="textarea" rows={4} placeholder="Write your message..." className="p-2" />
                            </Form.Group>

                            <Button variant="primary" size="lg" className="w-100 fw-bold">Submit</Button>
                        </Form>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
};

export default Contact;
