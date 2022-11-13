import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar({ handleLogout }) {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  return (
    <>
      <nav className='navbar'>
        <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
          Nazakat
        </Link>
        <div className='menu-icon' onClick={handleClick}>
          <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
        </div>
        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
          <li className='nav-item'>
            <Link to='/' className='nav-links' onClick={closeMobileMenu}>
              Home
            </Link>
          </li>
          <li className='nav-item'>
            <Link
              to='/diseasepred'
              className='nav-links'
              onClick={closeMobileMenu}
            >
              Disease Prediction
            </Link>
          </li>
          <li className='nav-item'>
            <Link
              to='/health'
              className='nav-links'
              onClick={closeMobileMenu}
            >
              Health
            </Link>
          </li>
          <li className='nav-item'>
            <Link
              to='/doctor'
              className='nav-links'
              onClick={closeMobileMenu}
            >
              Doctor
            </Link>
          </li>
          <li className='nav-item'>
            <Link to='/hi' className='nav-links' style={{ color: "#1aff1a", hover: "none" }} onClick={closeMobileMenu}>
              A/आ
            </Link>
          </li>
          
        </ul>
      </nav>
    </>
  );
}

export default Navbar;
