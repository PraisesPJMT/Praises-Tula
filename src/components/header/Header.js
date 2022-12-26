import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faClose } from '@fortawesome/free-solid-svg-icons';
import './Header.css';

const Header = () => (
  <header>
    <a className="logo" href="/">
      Praises-Tula
    </a>
    <button type="button" className="mobile-menu-control">
      <FontAwesomeIcon className="bars" icon={faBars} />
      <FontAwesomeIcon className="close" icon={faClose} />
    </button>
  </header>
);

export default Header;
