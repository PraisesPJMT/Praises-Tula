import React, { useState } from 'react';
import {
  Link, NavLink,
} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faClose } from '@fortawesome/free-solid-svg-icons';
import './Header.css';
import ContactLink from '../footer/ContactLink';

const Header = () => {
  const [mobileMenu, setMobileMenu] = useState(true);
  const NavBars = [
    { path: '/', link: '_hello' },
    { path: '/', link: '_about-me' },
    { path: '/', link: '_projects' },
    { path: '/', link: '_contact-me' },
  ];

  const handleMenu = () => {
    const header = document.querySelector('header');
    const nav = document.querySelector('.nav');
    const bars = document.querySelector('.bars');
    const close = document.querySelector('.close');
    if (mobileMenu) {
      header.classList.remove('mobile-opened');
      header.classList.add('mobile-closed');
      nav.classList.add('hide');
      close.classList.add('hide');
      bars.classList.remove('hide');
    } else {
      header.classList.remove('mobile-closed');
      header.classList.add('mobile-opened');
      nav.classList.remove('hide');
      close.classList.remove('hide');
      bars.classList.add('hide');
    }
    setMobileMenu(!mobileMenu);
  };
  return (
    <header className="header">
      <div className="mobile-container">
        <Link className="logo" to="/">
          praises-tula
        </Link>
        <button
          type="button"
          className="mobile-menu-control"
          onClick={handleMenu}
          title="mobile menu button"
        >
          <FontAwesomeIcon className="bars" icon={faBars} />
          <FontAwesomeIcon className="close hide" icon={faClose} />
        </button>
      </div>

      <nav className="nav hide">
        {
          NavBars.map((nav) => (
            <NavLink
              to={nav.path}
              key={nav.link}
              onClick={handleMenu}
            >
              { nav.link }
            </NavLink>
          ))
        }
      </nav>
      { mobileMenu ? (<ContactLink />) : '' }
    </header>
  );
};

export default Header;
