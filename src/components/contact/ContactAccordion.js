import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCaretRight, faCaretDown, faChevronRight,
  faEnvelope, faPhone,
} from '@fortawesome/free-solid-svg-icons';
import {
  faAngellist, faGitAlt, faLinkedin,
  faMarkdown, faMastodon,
} from '@fortawesome/free-brands-svg-icons';

const data = [
  {
    id: 1,
    type: 'text',
    title: 'find-me-also-on',
    details: [
      {
        id: 1, subtitle: 'github', value: 'GitHub Account', link: 'https://github.com/PraisesPJMT',
      },
      {
        id: 2, subtitle: 'linkedin', value: 'LinkedIn Profile', link: 'https://www.linkedin.com/in/praises-tula',
      },
      {
        id: 3, subtitle: 'mastodon', value: 'Mastodon Profile', link: 'https://ruby.social/@pjmt',
      },
      {
        id: 4, subtitle: 'angellist', value: 'AngelList Profile', link: 'https://angel.co/u/praises-tula',
      },
    ],
  },
  {
    id: 2,
    type: 'links',
    title: 'testimonials',
    details: [
      { subid: 1, subtitle: 'testaments' },
    ],
  },
  {
    id: 3,
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
  { id: 1, subtitle: 'github', icon: faGitAlt },
  { id: 2, subtitle: 'linkedin', icon: faLinkedin },
  { id: 3, subtitle: 'mastodon', icon: faMastodon },
  { id: 4, subtitle: 'agellist', icon: faAngellist },
  { id: 5, subtitle: 'email', icon: faEnvelope },
  { id: 6, subtitle: 'phone', icon: faPhone },
];

const ContactAccordion = () => {
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

export default ContactAccordion;
