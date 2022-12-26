import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faMastodon, faLinkedinIn, faGithub,
} from '@fortawesome/free-brands-svg-icons';
import './Footer.css';

const ContactLink = () => (
  <div className="links-container">
    <p className="find-me">find me in:</p>

    <a className="footer-link" href="https://ruby.social/@pjmt" target="_blank" rel="noreferrer">
      <FontAwesomeIcon className="social-icon" icon={faMastodon} />
    </a>
    <a className="footer-link" href="https://www.linkedin.com/in/praises-tula" target="_blank" rel="noreferrer">
      <FontAwesomeIcon className="social-icon" icon={faLinkedinIn} />
    </a>
    <a className="footer-link" href="https://github.com/PraisesPJMT" target="_blank" rel="noreferrer">
      <FontAwesomeIcon className="social-icon" icon={faGithub} />
    </a>
  </div>
);

export default ContactLink;
