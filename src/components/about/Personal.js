import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './About.css';
import {
  faLinkedin, faMastodon, faSquareFacebook,
  faSquareGithub, faTwitter,
} from '@fortawesome/free-brands-svg-icons';

const Bio = () => (
  <div className="text-block">
    <hr className="linkage" id="bio" />
    <h3 className="sub-heading2">
      <span className="harsh">## </span>
      personal-info
      <span className="text">
        <span className="mono"> &frasl; </span>
        bio
      </span>
    </h3>
    <p>
      I&apos;m a Full-Stack Software Developer located in Nigeria.
      I have a great passion for UI creation, effects,
      animation and dynamic user experiences.
      <br />
      <br />
      I try to keep up with security and best practices and am always
      looking for new things to learn and new opportunities.
    </p>
  </div>
);

const Interest = () => (
  <div className="text-block">
    <hr className="linkage" id="interest" />
    <h3 className="sub-heading2">
      <span className="harsh">## </span>
      personal-info
      <span className="text">
        <span className="mono"> &frasl; </span>
        interest
      </span>
    </h3>
    <p>
      I&apos;m interested in working on ambitious projects with
      positive people and goal-oriented companies.
      <br />
      <br />
      I am a Liverpool FC fan. I love swimming,
      watching TV series and travelling.
    </p>
  </div>
);
const Profiles = () => (
  <div className="text-block">
    <hr className="linkage" id="public-profiles" />
    <h3 className="sub-heading2">
      <span className="harsh">## </span>
      personal-info
      <span className="text">
        <span className="mono"> &frasl; </span>
        public-profiles
      </span>
    </h3>
    <div className="links-box">
      <a
        className="social-icon email-btn"
        href="https://www.linkedin.com/in/praises-tula"
        target="_blank"
        rel="noreferrer"
      >
        <FontAwesomeIcon
          className="social-icon twitter"
          icon={faLinkedin}
        />
      </a>
      <a
        className="social-icon email-btn"
        href="https://twitter.com/PraisesPJMT"
        target="_blank"
        rel="noreferrer"
      >
        <FontAwesomeIcon
          className="social-icon twitter"
          icon={faTwitter}
        />
      </a>
      <a
        className="social-icon email-btn"
        href="https://web.facebook.com/praises.musa"
        target="_blank"
        rel="noreferrer"
      >
        <FontAwesomeIcon
          className="social-icon facebook"
          icon={faSquareFacebook}
        />
      </a>
      <a
        className="social-icon email-btn"
        href="https://ruby.social/@pjmt"
        target="_blank"
        rel="noreferrer"
      >
        <FontAwesomeIcon
          className="social-icon instagram"
          icon={faMastodon}
        />
      </a>
      <a
        className="social-icon email-btn"
        href="https://github.com/PraisesPJMT"
        target="_blank"
        rel="noreferrer"
      >
        <FontAwesomeIcon
          className="social-icon github"
          icon={faSquareGithub}
        />
      </a>
    </div>
  </div>
);

export { Bio, Interest, Profiles };
