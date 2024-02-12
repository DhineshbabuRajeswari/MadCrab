import React, { useState } from 'react'
import './Navbar.css'
import logo from '../Assets/Logo.png'
import usericon from '../Assets/meal.png'
import cart from '../Assets/chicken.png'
import { Link } from 'react-router-dom'
import stripes from '../Assets/food.png'

const Navbar = ({Cartsize}) => {
    // const [cartcount, setCartcount] = useState(0)
    const [dash, setDash] = useState('')
    const [togg, setTogg] = useState('navmenu')

    const li_Style = {
        textDecoration:'none',
        color:'black',
        textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)'
    }

    const stateHandlefn = () =>{
        setTogg('surpricemenu')
    }

    const Handlefn = () =>{
        setTogg('navmenu')
    }
    
  return (
    <div className='navbar'>
        
        <div className="navlogo">
            <img src={logo} alt="Logo" height={70} width={144}/>
            <p>MadCrab</p>
        </div>
        <div className="mainnav">
            <div className="threestripes">
                <button onClick={togg==="navmenu"?stateHandlefn:Handlefn}><img src={stripes} alt="Navigation"  height={40} width={40}/></button>
            </div>
            <ul className={togg}>
                <li onMouseOver={()=>{setDash("home")}} onMouseOut={()=>{setDash("")}} ><Link to='/' style={li_Style}>Home</Link>{dash==="home" ?<hr/>:<></>}</li>
                <li onMouseOver={()=>{setDash("menu")}} onMouseOut={()=>{setDash("")}} ><Link to='/menu' style={li_Style}>Menu</Link>{dash==="menu" ?<hr/>:<></>}</li>
                <li onMouseOver={()=>{setDash("specials")}} onMouseOut={()=>{setDash("")}} ><Link to='/specials' style={li_Style}>Specials</Link>{dash==="specials" ?<hr/>:<></>}</li>
                <li onMouseOver={()=>{setDash("order")}} onMouseOut={()=>{setDash("")}} ><Link to='/order' style={li_Style}>Order Now</Link>{dash==="order" ?<hr/>:<></>}</li>
                <li onMouseOver={()=>{setDash("story")}} onMouseOut={()=>{setDash("")}} ><Link to='/story' style={li_Style}>Our Story</Link>{dash==="story" ?<hr/>:<></>}</li>
            </ul>
        </div>
        <div className="nav-login">
            <div className='loginbuttondiv'>
            <img src={usericon} alt="user" height={40} width={40}/>
            <button>Login</button>
            </div>
            <div className='cart'>
            <div className="cartcount">{Cartsize}</div>
            <button className='cartbutton'><Link to='/cart'><img src={cart} alt="cart" height={40} width={40}/></Link></button>
            </div>
        </div>
    </div>
  )
}

export default Navbar