import { useEffect, useState } from 'react';
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
import Login from './pages/Login';
import NotFound from './pages/NotFound'

function App() {
  const [isLogin , setIsLogin] = useState(false);
  useEffect(()=>{
    const user = localStorage.getItem('userData');
    if(user){
      setIsLogin(true)
    }
  },[])


  return (
    <div className="app-container"> 
      <BrowserRouter>
       {isLogin && <Header />}
        <div className="content"> 
          <Routes>
            <Route path='/' element={ isLogin ? <Home/> :  <Login/>} />
            <Route path="/home" element={<Home />} />
            <Route path="/products" element={<Products />} />
            <Route path="/product/:productId" element={<SingleProduct />} />
            <Route path='/cart' element={<Cart/>} />
            <Route path='/About' element={<About/>} />
            <Route path='/Contact' element= {<Contact/>} />
            <Route path='/Checkout' element={<Checkout/>} />
            <Route path="*" element={<NotFound />} /> {/* Catch-all 404 route */}

          </Routes>
        </div>
       {isLogin && <Footer />}
      </BrowserRouter>
    </div>
  );
}

export default App;
