import React, { useState, useEffect } from 'react';
import './Header.css';
import ContactLink from '../footer/ContactLink';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const NavBars = [
    { path: '#hello', link: '_hello' },
    { path: '#projects', link: '_projects' },
    { path: '#about', link: '_about-me' },
    { path: '#contact', link: '_contact-me' },
  ];

  useEffect(() => {
    const navBar = document.querySelector('#project-link');

    const scrollHandler = () => {
      if (window.scrollY > 1000) {
        navBar?.addClass('active');
      } else {
        navBar?.removeClass('active');
      }
    };

    window.addEventListener('scroll', scrollHandler);

    // Return effect cleanup function to remove listener
    return () => {
      window.removeEventListener('scroll', scrollHandler);
    };
  }, []);

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
              id={`${nav.link.slice(1)}-link`}
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
