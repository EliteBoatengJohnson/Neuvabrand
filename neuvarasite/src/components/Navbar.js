import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav style={{ backgroundColor: '#99CC33', padding: '1rem' }}>
      <ul style={{ listStyle: 'none', display: 'flex', justifyContent: 'space-around' }}>
        <li><Link to="/" style={{ color: 'white', textDecoration: 'none' }}>Home</Link></li>
        <li><Link to="/about" style={{ color: 'white', textDecoration: 'none' }}>About</Link></li>
        <li><Link to="/projects" style={{ color: 'white', textDecoration: 'none' }}>Projects</Link></li>
      </ul>
    </nav>
  );
};

export default NavBar;