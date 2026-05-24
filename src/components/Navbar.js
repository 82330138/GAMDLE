import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

function Navbar() {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  const links = [
  { name: 'Home',     path: '/' },
  { name: 'Products', path: '/products' },
  { name: 'Gallery',  path: '/gallery' },
  { name: 'About',    path: '/about' },
  { name: 'Contact',  path: '/contact' },
  { name: '🛒 Cart',  path: '/cart' },
];
  return (
    <nav className="navbar">
      <Link to="/" className="navbar-logo">G A M D L E</Link>

      <div className={`navbar-links ${open ? 'open' : ''}`}>
        {links.map(link => (
          <Link
            key={link.name}
            to={link.path}
            className={location.pathname === link.path ? 'active' : ''}
            onClick={() => setOpen(false)}
          >
            {link.name}
          </Link>
        ))}
      </div>

      <button className="hamburger" onClick={() => setOpen(!open)}>
        <span/>
        <span/>
        <span/>
      </button>
    </nav>
  );
}

export default Navbar;