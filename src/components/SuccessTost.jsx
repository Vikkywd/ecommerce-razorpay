import React from "react";
import { ToastContainer, toast } from 'react-toastify'; 
import 'react-toastify/dist/ReactToastify.css';


const SuccessTost = ({message})=>{
console.log('message: ', message);
    if(message){
        toast.success(message);
    }
    return (
        <ToastContainer position="top-right" autoClose={3000} />
    )
}

export default SuccessTost;