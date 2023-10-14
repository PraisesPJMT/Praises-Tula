import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faHtml5, faJsSquare, faReact, faSquareGithub,
} from '@fortawesome/free-brands-svg-icons';
import { faArrowUpRightFromSquare, faGem } from '@fortawesome/free-solid-svg-icons';
import KadaTech from '../../assets/kada_tech.png';
import ToDoList from '../../assets/todo_list.png';
import AwesomeBooks from '../../assets/awesome_books.gif';
import MathMagicinas from '../../assets/math_magicians.gif';
import Wedrop from '../../assets/wedrop-preview.gif';
// import Inkling from '../../assets/inkling_blog.png';
// import VipCar from '../../assets/vip_cars.png';
import Leaderboard from '../../assets/leaderboard.jpeg';
import MovieBox from '../../assets/moview-box.png';
import Pixagram from '../../assets/pixagram.png';

const images = [
  { id: 1, image: KadaTech }, { id: 2, image: ToDoList },
  { id: 3, image: AwesomeBooks }, { id: 4, image: MathMagicinas },
  { id: 4, image: Leaderboard }, { id: 5, image: Wedrop },
  // { id: 6, image: Inkling }, { id: 10, image: VipCar },
  { id: 6, image: MovieBox }, { id: 7, image: Pixagram },
];

// eslint-disable-next-line react/prop-types
const ProjectCard = ({ project }) => {
  const {
    // eslint-disable-next-line react/prop-types
    id, title, description, code, link, type, stack,
  } = project;

  return (
    <div className="project">
      <h4 className="project-title">
        <span className="purple">
          {/* eslint-disable-next-line react/prop-types */}
          {stack[stack.length - 1]}
          {' '}
        </span>
        <span className="text">
          <span className="mono"> &frasl; </span>
          _
          {/* eslint-disable-next-line react/prop-types */}
          {title.toLowerCase().replaceAll(' ', '_')}
        </span>
      </h4>
      <div className="project-item">
        <div className={`project-image-container ${type}`}>
          <img
            src={images[id - 1]?.image}
            alt={title}
            className={`project-image ${type}`}
          />
          <span className="pro-stack">
            {/* eslint-disable-next-line react/prop-types,no-nested-ternary */}
            { stack.map((s) => (s === 'JavaScript' ? (
              <FontAwesomeIcon key={s} className="project-icon" icon={faJsSquare} />
              // eslint-disable-next-line no-nested-ternary
            ) : s === 'React' ? (
              <FontAwesomeIcon key={s} className="project-icon" icon={faReact} />
            ) : s === 'Rails' ? (
              <FontAwesomeIcon key={s} className="project-icon" icon={faGem} />
            ) : (
              <FontAwesomeIcon key={s} className="project-icon" icon={faHtml5} />
            )))}
          </span>
        </div>
        <div className="project-summary">
          <p>
            {description}
          </p>
          <div className="project-views">
            { link ? (
              <a
                className="btn view-btn"
                href={link}
                target="_blank"
                rel="noreferrer"
              >
                view
                <FontAwesomeIcon
                  className="project-icon"
                  icon={faArrowUpRightFromSquare}
                />
              </a>
            ) : ' '}
            <a
              className="btn view-btn"
              href={code}
              target="_blank"
              rel="noreferrer"
            >
              code
              <FontAwesomeIcon
                className="project-icon"
                icon={faSquareGithub}
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
