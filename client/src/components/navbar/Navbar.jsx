import React, { useState } from 'react';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import './navbar.css';

import { Link } from 'react-router-dom'
const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className="jedr__navbar">

        <div className="jedr__navbar-links_logo">
          <h1>JEDR Tech</h1>
        </div>
        
      <div className='jedr-right-links'>
      <div className="jedr__navbar-links_container">
        <Link to="/" className="nav__links_route">Home</Link>
        <Link to="/jedr-tech-about" className="nav__links_route">About</Link>
        <Link to="/jedr-tech-vision" className="nav__links_route">Vision</Link>
        <Link to="/jedr-tech-mission" className="nav__links_route">Mission</Link>
        <Link to="/jedr-tech-motivation" className="nav__links_route">Motivation</Link>
      </div>
      <div className="login_and_signup">
        <Link to="/jedr-tech-login" className="jedr_login_btn">Login</Link>
        <Link to="/jedr-tech-signup" className="jedr_signup_btn">sign up</Link>
      </div>


      <div className="jedr__navbar-menu">
        {toggleMenu
          ? <RiCloseLine color="#fff" size={27} onClick={() => setToggleMenu(false)} />
          : <RiMenu3Line color="#fff" size={27} onClick={() => setToggleMenu(true)} />}
        {toggleMenu && (
        <div className="jedr__navbar-menu_container scale-up-center">
          <div className="jedr__navbar-menu_container-links">
           
          </div>
          <div className="jedr__navbar-menu_container-links-sign">
            <Link to="/login" className="jedr_login_btn">Login</Link>
            <Link to="/sinup" className="jedr_signup_btn">sign up</Link>
          </div>
        </div>
        )}
      </div>
      </div>
    </div>
  );
};

export default Navbar;