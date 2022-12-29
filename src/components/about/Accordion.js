import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCaretRight, faCaretDown, faChevronRight,
  faEnvelope, faPhone,
} from '@fortawesome/free-solid-svg-icons';
import './About.css';
import { faMarkdown } from '@fortawesome/free-brands-svg-icons';

const data = [
  {
    id: 1,
    type: 'links',
    title: 'personal-info',
    details: [
      { subid: 1, subtitle: 'bio' },
      { subid: 2, subtitle: 'interest' },
      { subid: 3, subtitle: 'public-profiles' },
    ],
  },
  {
    id: 2,
    type: 'links',
    title: 'professional-info',
    details: [
      { subid: 1, subtitle: 'basic' },
      { subid: 2, subtitle: 'tech-stack' },
      { subid: 3, subtitle: 'tool-stack' },
    ],
  },
  {
    id: 3,
    type: 'text',
    title: 'contacts',
    details: [
      {
        id: 1, subtitle: 'email', value: 'praisesmusa@gmail.com', link: 'tel:+2348085852828',
      },
      {
        id: 2, subtitle: 'phone', value: '+234(0)8085851818', link: 'mailto:praisesmusa@gmail.com',
      },
    ],
  },
];

const icons = [
  { id: 1, subtitle: 'email', icon: faEnvelope },
  { id: 2, subtitle: 'phone', icon: faPhone },
];

const Accordion = () => {
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
              { (item.type === 'links') ? (
                item.details.map((detail) => (
                  <a className="sub-links" id={detail.id} key={detail.subtitle} href={`#${detail.subtitle}`}>
                    <FontAwesomeIcon className="accordion-arrow-icon" icon={faChevronRight} />
                    <FontAwesomeIcon className="content-icon" icon={faMarkdown} />
                    <span>{ detail.subtitle }</span>
                  </a>
                ))
              ) : (
                item.details.map((detail) => (
                  <a className="sub-links" id={detail.id} key={detail.subtitle} href={`#${detail.link}`} target="_blank" rel="noreferrer">
                    <FontAwesomeIcon
                      className="content-icon"
                      icon={icons[detail.id - 1].icon}
                    />
                    <span>{ detail.subtitle }</span>
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

export default Accordion;
