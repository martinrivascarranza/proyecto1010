
import React from 'react';
import CartWidget from './CartWidget'; 
import './styles/Navbar.css';


const NavBar = () => {
  return (
    <nav>
      <h1>10:10</h1>
      <div className="nav-links">
        <a href="/">Home</a>
        <a href="/damas">Damas</a>
        <a href="/caballeros">Caballeros</a>
        <a href="/contacto">Contacto</a>
      </div>
      <CartWidget />
    </nav>
  );
};

export default NavBar;
