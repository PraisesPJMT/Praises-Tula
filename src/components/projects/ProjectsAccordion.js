import React, { useState } from 'react';
import './Projects.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCaretDown, faCaretRight, faEnvelope,
  faGem, faPhone,
} from '@fortawesome/free-solid-svg-icons';
import {
  faHtml5, faJsSquare, faReact,
} from '@fortawesome/free-brands-svg-icons';

const data = [
  {
    id: 1,
    type: 'checks',
    title: 'projects',
    details: [
      {
        id: 1, subtitle: 'HTML & CSS',
      },
      {
        id: 2, subtitle: 'JavaScript',
      },
      {
        id: 3, subtitle: 'React',
      },
      {
        id: 4, subtitle: 'Ruby-on-Rails',
      },
    ],
  },
  {
    id: 2,
    type: 'text',
    title: 'contacts',
    details: [
      {
        id: 5, subtitle: 'email', value: 'praisesmusa@gmail.com', link: 'mailto:praisesmusa@gmail.com',
      },
      {
        id: 6, subtitle: 'phone', value: '+234(0)8085851818', link: 'tel:+2348085852828',
      },
    ],
  },
];

const icons = [
  { id: 1, subtitle: 'html&css', icon: faHtml5 },
  { id: 2, subtitle: 'javascript', icon: faJsSquare },
  { id: 3, subtitle: 'react', icon: faReact },
  { id: 4, subtitle: 'ruby-on-rails', icon: faGem },
  { id: 5, subtitle: 'email', icon: faEnvelope },
  { id: 6, subtitle: 'phone', icon: faPhone },
];

const ProjectsAccordion = () => {
  const [activeAccordion, setActiveAccordion] = useState(null);

  const toggle = (index) => {
    if (index === activeAccordion) {
      return setActiveAccordion(null);
    }
    return setActiveAccordion(index);
  };

  return (
    <div className="accordion-container">
      { data.map((item, index) => (
        <div key={item.id} className="accordion">
          <div
            className="accordion-header"
            onClick={() => toggle(index)}
            onKeyPress={(event) => {
              if (event.key === 'Enter') {
                toggle(index);
              }
            }}
            role="button"
            tabIndex={index}
          >
            { (activeAccordion === index) ? (<FontAwesomeIcon className="accordion-arrow-icon" icon={faCaretDown} />) : (<FontAwesomeIcon className="accordion-arrow-icon" icon={faCaretRight} />)}
            <span>{ item.title }</span>
          </div>
          { (activeAccordion === index) ? (
            <div className="accordion-content">
              { (item.type === 'checks') ? (
                item.details.map((detail) => (
                  <label className="sub-links checkbox-label" htmlFor={detail.subtitle} key={detail.subtitle}>
                    <input type="checkbox" id={detail.subtitle} className="checkbox" />
                    <span className="label">
                      <FontAwesomeIcon
                        className="content-icon"
                        icon={icons[detail.id - 1].icon}
                      />
                      { detail.subtitle }
                    </span>
                  </label>
                ))
              ) : (
                item.details.map((detail) => (
                  <a className="sub-links" id={detail.id} key={detail.subtitle} href={`#${detail.link}`} target="_blank" rel="noreferrer">
                    <FontAwesomeIcon
                      className="content-icon"
                      icon={icons[detail.id - 1].icon}
                    />
                    <span>{ detail.value }</span>
                  </a>
                ))
              )}
            </div>
          ) : ''}
        </div>
      ))}
    </div>
  );
};

export default ProjectsAccordion;
