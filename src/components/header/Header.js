import React, { useState } from 'react';
import {
  Link, NavLink,
} from 'react-router-dom';
import './Header.css';
import ContactLink from '../footer/ContactLink';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const NavBars = [
    { path: '/', link: '_hello' },
    { path: '/about', link: '_about-me' },
    { path: '/projects', link: '_projects' },
    { path: '/contact', link: '_contact-me' },
  ];

  return (
    <header className="header">
      <Link className="logo" to="/">
        praises-tula
      </Link>

      <nav className={`nav ${isOpen ? 'open' : 'close'}`}>
        {
          NavBars.map((nav) => (
            <NavLink
              className="nav-link"
              to={nav.path}
              key={nav.link}
              onClick={() => setIsOpen(false)}
            >
              { nav.link }
            </NavLink>
          ))
        }
        { isOpen ? (<ContactLink />) : '' }
      </nav>
      <button
        type="button"
        title="mobile menu open button"
        className={`menu-btn ${isOpen ? 'open' : 'close'}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="bar" />
      </button>
    </header>
  );
};

export default Header;
