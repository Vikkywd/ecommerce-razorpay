import React, { useEffect, useState } from "react";
import { Button, Card, Container, Form, Spinner } from "react-bootstrap";
import { useSelector,useDispatch } from "react-redux";
import { userLogin } from "../redux/slices/UserAuth";
import { Navigate, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify'; 
import 'react-toastify/dist/ReactToastify.css';


const Login = ()=>{
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(false);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const {user} = useSelector((state)=> state.user) ;
    const [formData, setFormData] = useState({
        username : '',
        password: ''
    });

    useEffect(()=>{
        if(user.accessToken){
            setLoading(true);
            toast.success(`Login successfully!`);
            setTimeout(()=>  navigate('/home'), 3000 );
        }else{
            if(error){
                toast.success(`Login Failed!`);
            }
        }
    },[user, navigate])



    const handleSubmit = async (e)=>{
        e.preventDefault();
        dispatch(userLogin(formData))
    }

    const handleChange = (e)=>{
        setFormData({...formData, [e.target.name]: e.target.value})
    }
    return (
        <Container className="d-flex justify-content-center align-items-center vh-100">
        <Card style={{ width: "400px", padding: "20px", borderRadius: "15px", boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)" }}>
            <Card.Body>
                <h2 className="text-center mb-4" style={{ fontFamily: "cursive", color: "#ff6f61" }}>
                    Handcraft Login
                </h2>
                {error && <Alert variant="danger">{error}</Alert>}
                <Form onSubmit={handleSubmit}>
                    <Form.Group className="mb-3">
                        <Form.Label>Username</Form.Label>
                        <Form.Control 
                            type="text" 
                            placeholder="Enter username" 
                            name="username" 
                            value={formData.username} 
                            onChange={handleChange} 
                            required 
                        />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Password</Form.Label>
                        <Form.Control 
                            type="password" 
                            placeholder="Enter password" 
                            name="password" 
                            value={formData.password} 
                            onChange={handleChange} 
                            required 
                        />
                    </Form.Group>
                    <Button variant="danger" type="submit" className="w-100" disabled=
                    {loading}>
                        {loading ? <Spinner animation="border" size="sm" /> : "Login"}
                    </Button>
                </Form>
                <p className="text-center mt-3">
                    Don't have an account? <a href="/register" style={{ color: "#ff6f61" }}>Sign up</a>
                </p>
            </Card.Body>
        </Card>
        <ToastContainer position="top-right" autoClose={3000} />
    </Container>
    )
}

export default Login;