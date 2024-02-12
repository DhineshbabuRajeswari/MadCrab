import './App.css';
import Navbar from './Components/Navbar/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Pages/home';
import Menu from './Pages/menu';
import Specials from './Pages/specials';
import Order from './Pages/Order';
import Story from './Pages/story';
import Login from './Pages/login';
import Cart from './Pages/cart';
import Footer from './Components/Footer/footer';
import { useState } from 'react';

function App() {

  const [cart, setCart] = useState([])

  const handleClickfn = (item) => {
    let isPresent = false
    cart.forEach((product) => {
      if (item.id===product.id)
        isPresent=true;
    })
    if (isPresent)
      return
    setCart([...cart, item])
    console.log(item)
  }

  const itemRemove = (item)=>{
    const updatedCart = cart.filter((product) => product.id !== item.id);

    setCart(updatedCart);
  }

  return (
    <div>
      <BrowserRouter>
      <Navbar Cartsize={cart.length} />
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/menu' element={<Menu handleClick={handleClickfn}/>}/>
        <Route path='/specials' element={<Specials/>}/>
        <Route path='/order' element={<Order/>}/>
        <Route path='/story' element={<Story/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/cart' element={<Cart cartItems = {cart} itemRemove = {itemRemove}/>}/>
      </Routes>
      <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
