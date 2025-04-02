import React from "react";
import { Col, Container, Nav, Row } from "react-bootstrap";
import "./style.css";

const Footer = () => {
  return (
    <footer className="bg-dark text-white py-4 mt-auto">
      <Container>
        <Row>
          <Col md={6}>
            <p>&copy; 2025 Handcrafted E-Shop. All rights reserved.</p>
          </Col>
          <Col md={6}>
            <Nav className="justify-content-end">
              <Nav.Link href="#facebook" className="text-white">Facebook</Nav.Link>
              <Nav.Link href="#twitter" className="text-white">Twitter</Nav.Link>
              <Nav.Link href="#instagram" className="text-white">Instagram</Nav.Link>
            </Nav>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
