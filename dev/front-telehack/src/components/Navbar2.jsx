import React from 'react'
import { Link } from 'react-router-dom';
import '../styles/Navbar.css'
import logo from '../assets/logo.png'
import search from '../assets/mynaui_search.png'
import user from '../assets/Rectangle.png'
export default function Navbar2 () {
  return (
    <nav>
      <div className="nav-container">
        <div className="nav-logo">
          <img src={logo} alt="" />
        </div>
        <ul className="nav-links">
          <li><Link to="/loginForm">Services</Link></li>
          <li><a href="#">Products</a></li>
          <li><a href="#">E-Payment</a></li>
        </ul>
        <div className="nav-user">
          <img src={search} alt="" />
          <Link to="/loginForm" className='main-btn'>Register</Link>
        </div>
      </div>
    </nav>
  )
}
