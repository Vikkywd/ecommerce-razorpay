import { useState } from 'react';
import Header from './components/Header';
import Products from './components/Product';
import Footer from './components/Footer';
import Home from './pages/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SingleProduct from './components/SingleProduct';
import './App.css';
import Cart from './components/Cart';
import About from './pages/About';
import Contact from './pages/Contact';
import Checkout from './components/Checkout';

function App() {
  return (
    <div className="app-container"> {/* Add wrapper for flex layout */}
      <BrowserRouter>
        <Header />
        <div className="content"> {/* Content wrapper */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Products />} />
            <Route path="/product/:productId" element={<SingleProduct />} />
            <Route path='/cart' element={<Cart/>} />
            <Route path='/About' element={<About/>} />
            <Route path='/Contact' element= {<Contact/>} />
            <Route path='/Checkout' element={<Checkout/>} />
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
