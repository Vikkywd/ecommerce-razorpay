import React, { useEffect, useState } from "react";
import { Badge, Button, Nav, Navbar } from "react-bootstrap";
import "./style.css"
import { NavLink } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { FaShoppingCart } from "react-icons/fa";
import { getCartItem } from "../redux/slices/CartSlice";


const Header = ()=>{
  const [cartCount, setCartCount] = useState(0)
  const dispatch = useDispatch();
  const {cartData, success} = useSelector((state)=> state.cart);
  console.log('success: ', success);
  
  const userId = 1 // localStorage se le kr ana h 
  useEffect(()=>{
    dispatch(getCartItem(userId));
  },[success])
    return(

        <Navbar bg="dark" variant="dark" >
        <Navbar.Brand as={NavLink} to="/">Handcrafted E-Shop</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar-nav" />
        <Navbar.Collapse id="navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link as={NavLink} to="/products">Products</Nav.Link>
            <Nav.Link as={NavLink} to='/About'>About Us</Nav.Link>
            <Nav.Link as={NavLink} to='/Contact'>Contact</Nav.Link>
          </Nav>
          <Nav className="ml-auto">
                    <Nav.Link as={NavLink} to="/cart" className="position-relative">
                        <FaShoppingCart size={24} />
                        {cartData?.products?.length > 0 && (
                            <Badge bg="danger" className="position-absolute top-0 start-100 translate-middle">
                                {cartData?.products?.length}
                            </Badge>
                        )}
                    </Nav.Link>
                </Nav>

          {/* <Button variant="danger" className="cta-button">Shop Now</Button> */}
        </Navbar.Collapse>
      </Navbar>

    )
}

export default Header;