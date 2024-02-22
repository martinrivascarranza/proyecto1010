
import React from 'react';
import { Link } from 'react-router-dom';
import CartWidget from './CartWidget';
import './styles/Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <Link className="navbar-brand" to="/">10:10</Link>
      <div className="navbar-links-container">
        <div className="navbar-links">
          <Link className="nav-link" to="/" style={{ color: 'black' }}>Home</Link>
          <Link className="nav-link" to="/category/damas" style={{ color: 'black' }}>Damas</Link>
          <Link className="nav-link" to="/category/caballeros" style={{ color: 'black' }}>Caballeros</Link>
          <CartWidget />
        </div>
      </div>
      </nav>
  );
};

export default Navbar;
