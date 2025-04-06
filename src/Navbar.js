import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src="/W_Logo.png" alt="Watermelon Logo" className="logo-image" />
        WATERMELON-SUGAR
      </div>
      <ul className="navbar-links">
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About Us</a></li>
        <li><a href="#why-us">Why Us?</a></li>
        <li><a href="#products">Products</a></li>
        <li><a href="#contact">Contact Us</a></li>
      </ul>
    </nav>
  );
};


export default Navbar;



