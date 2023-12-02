import React, { useState } from 'react'
import './Navbar.css'
import logo from '../Assets/logo.png';
import cart_icon from '../Assets/cart_icon.png';
import { Link } from 'react-router-dom';

const Navbar = () => {

    const [menu,setMenu] = useState("Home");
  return (
    <div className='navbar'>
      <div className='nav-logo'>
      <img src={logo} alt='logo_img' />
      <p>BookMyPrasad</p>
      </div>
      <ul className="nav-menu">
        <li onClick={()=>{setMenu("Home")}}><Link style={{textDecoration: 'none'}} to='/'>Home</Link>{menu==="Home"?<hr/>:<></>}</li>
        <li onClick={()=>{setMenu("About")}}><Link style={{textDecoration: 'none'}} to='/About'>About</Link>{menu==="About"?<hr/>:<></>}</li>
        <li onClick={()=>{setMenu("Services")}}><Link style={{textDecoration: 'none'}} to='/Services'>Services</Link>{menu==="Services"?<hr/>:<></>}</li>
        <li onClick={()=>{setMenu("Contact Us")}}><Link style={{textDecoration: 'none'}} to='/Contact'>Contact Us</Link>{menu==="Contact Us"?<hr/>:<></>}</li>
      </ul>
      <div className="nav-login-cart">
        
        <Link style={{textDecoration: 'none'}} to='/login'><button>Login</button></Link>
        <Link style={{textDecoration: 'none'}} to='cart'> <img src={cart_icon} alt='cart_icon'/></Link>
        <div className="nav-cart-count">0</div>
      </div>
    </div>
  )
}

export default Navbar
