import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faGem, faWind, faLaptopCode,
  faFileCode, faPalette,
} from '@fortawesome/free-solid-svg-icons';
import './About.css';
import {
  faBootstrap, faCodepen, faCss3Alt, faGitAlt,
  faHtml5, faPython, faReact, faSquareGithub, faSquareJs,
} from '@fortawesome/free-brands-svg-icons';

const ProBasic = () => (
  <div id="basic" className="text-block">
    <h3 className="sub-heading2">
      <span className="harsh">## </span>
      professional-info
      <span className="text">
        <span className="mono"> &frasl; </span>
        basic
      </span>
    </h3>
    <p>
      I&apos;m relatively new to the software development world and
      since May 2022 I&apos;ve been building my technical, leadership,
      and collaborative skills at
      {' '}
      <a className="text-link" href="https://www.microverse.org/" target="_blank" rel="noreferrer">Microverse</a>
      {' '}
      through collaborating
      and pair programming with other students from all over the world.
      <br />
      <br />
      As a Software Developer, my goal is to continually increase my
      programming skills in order to present better solutions to my
      employers and their clients. I enjoy uncovering new ideas and
      would use them to advance my employers&apos; mission to deliver
      the best tech experiences.
    </p>
  </div>
);

const TechStack = () => (
  <div id="tech-stack" className="text-block">
    <h3 className="sub-heading2">
      <span className="harsh">## </span>
      professional-info
      <span className="text">
        <span className="mono"> &frasl; </span>
        tech-stack
      </span>
    </h3>
    <div className="stack-box">
      <h4 className="sub-heading3">
        <span className="harsh">### </span>
        tech-stack
        <span className="text">
          <span className="mono"> &frasl; &frasl; </span>
          languages
        </span>
      </h4>
      <div className="stack-wrap">
        <FontAwesomeIcon
          className="javascript stack-icon"
          icon={faSquareJs}
        />
        <span className="stack-name">
          JavaScript
        </span>
      </div>
      <div className="stack-wrap">
        <FontAwesomeIcon
          className="python stack-icon"
          icon={faPython}
        />
        <span className="stack-name">
          Python
        </span>
      </div>
      <div className="stack-wrap">
        <FontAwesomeIcon
          className="ruby stack-icon"
          icon={faGem}
        />
        <span className="stack-name">
          Ruby
        </span>
      </div>

      <h4 className="sub-heading3">
        <span className="harsh">### </span>
        tech-stack
        <span className="text">
          <span className="mono"> &frasl; &frasl; </span>
          markups
        </span>
      </h4>
      <div className="stack-wrap">
        <FontAwesomeIcon
          className="css stack-icon"
          icon={faCss3Alt}
        />
        <span className="stack-name">
          CSS3
        </span>
      </div>
      <div className="stack-wrap">
        <FontAwesomeIcon
          className="html stack-icon"
          icon={faHtml5}
        />
        <span className="stack-name">
          HTML5
        </span>
      </div>

      <h4 className="sub-heading3">
        <span className="harsh">### </span>
        tech-stack
        <span className="text">
          <span className="mono"> &frasl; &frasl; </span>
          frameworks
        </span>
      </h4>
      <div className="stack-wrap">
        <FontAwesomeIcon
          className="bootstrap stack-icon"
          icon={faBootstrap}
        />
        <span className="stack-name">
          Bootstrap
        </span>
      </div>
      <div className="stack-wrap">
        <FontAwesomeIcon
          className="react stack-icon"
          icon={faReact}
        />
        <span className="stack-name">
          React
        </span>
      </div>
      <div className="stack-wrap">
        <FontAwesomeIcon
          className="tailwind stack-icon"
          icon={faWind}
        />
        <span className="stack-name">
          TailWind CSS
        </span>
      </div>
      <div className="stack-wrap">
        <FontAwesomeIcon
          className="redux stack-icon"
          icon={faReact}
        />
        <span className="stack-name">
          Redux
        </span>
      </div>
      <div className="stack-wrap">
        <FontAwesomeIcon
          className="rails stack-icon"
          icon={faGem}
        />
        <span className="stack-name">
          Ruby-on-Rails
        </span>
      </div>
    </div>
  </div>
);
const TechTools = () => (
  <div id="tool-stack" className="text-block">
    <h3 className="sub-heading2">
      <span className="harsh">## </span>
      professional-info
      <span className="text">
        <span className="mono"> &frasl; </span>
        tool-stack
      </span>
    </h3>
    <div className="stack-box">
      <div className="stack-wrap">
        <FontAwesomeIcon
          className="git stack-icon"
          icon={faGitAlt}
        />
        <span className="stack-name">
          Git
        </span>
      </div>
      <div className="stack-wrap">
        <FontAwesomeIcon
          className="github stack-icon"
          icon={faSquareGithub}
        />
        <span className="stack-name">
          GitHub
        </span>
      </div>
      <div className="stack-wrap">
        <FontAwesomeIcon
          className="inkscape stack-icon"
          icon={faPalette}
        />
        <span className="stack-name">
          Inkscape
        </span>
      </div>
      <div className="stack-wrap">
        <FontAwesomeIcon
          className="code stack-icon"
          icon={faLaptopCode}
        />
        <span className="stack-name">
          VS Code
        </span>
      </div>
      <div className="stack-wrap">
        <FontAwesomeIcon
          className="codepen stack-icon"
          icon={faCodepen}
        />
        <span className="stack-name">
          Codepen
        </span>
      </div>
      <div className="stack-wrap">
        <FontAwesomeIcon
          className="jet-brains stack-icon"
          icon={faFileCode}
        />
        <span className="stack-name">
          JetBrains IDEs
        </span>
      </div>

    </div>
  </div>
);

export { ProBasic, TechStack, TechTools };