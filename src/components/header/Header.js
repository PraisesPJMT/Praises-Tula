import React, { useState } from 'react';
import './Header.css';
import ContactLink from '../footer/ContactLink';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const NavBars = [
    { path: '#hello', link: '_hello' },
    { path: '#about', link: '_about-me' },
    { path: '#projects', link: '_projects' },
    { path: '#contact', link: '_contact-me' },
  ];

  return (
    <header className="header">
      <a className="logo" href="#hello">
        praises-tula
      </a>

      <nav className={`nav ${isOpen ? 'open' : 'close'}`}>
        {
          NavBars.map((nav) => (
            <a
              className={`nav-link ${nav.link.slice(1)}-link`}
              href={nav.path}
              id={window.location.pathname === nav.link ? 'active' : ''}
              key={nav.link}
              onClick={() => setIsOpen(false)}
            >
              { nav.link }
            </a>
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
