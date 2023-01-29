import { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCaretDown, faCaretRight, faChevronRight,
  faEnvelope, faGem, faPhone,
} from '@fortawesome/free-solid-svg-icons';
import {
  faAngellist, faGitAlt, faHtml5,
  faJsSquare, faLinkedin, faMarkdown,
  faMastodon, faReact,
} from '@fortawesome/free-brands-svg-icons';
import { Sidebar } from '../assets/data';

const icons = [
  { id: 1, subtitle: 'html&css', icon: faHtml5 },
  { id: 2, subtitle: 'javascript', icon: faJsSquare },
  { id: 3, subtitle: 'react', icon: faReact },
  { id: 4, subtitle: 'ruby-on-rails', icon: faGem },
  { id: 5, subtitle: 'email', icon: faEnvelope },
  { id: 6, subtitle: 'phone', icon: faPhone },
  { id: 7, subtitle: 'github', icon: faGitAlt },
  { id: 8, subtitle: 'linkedin', icon: faLinkedin },
  { id: 9, subtitle: 'mastodon', icon: faMastodon },
  { id: 10, subtitle: 'angellist', icon: faAngellist },
  { id: 11, subtitle: 'email', icon: faEnvelope },
  { id: 12, subtitle: 'phone', icon: faPhone },
];

const SideBar = () => {
  const [activeAccordion, setActiveAccordion] = useState(null);
  // const navigate = useNavigate();

  const toggle = (index) => {
    if (index === activeAccordion) {
      return setActiveAccordion(null);
    }
    return setActiveAccordion(index);
  };

  const handleAccodionLink = (item) => {
    if (item.type === 'links') {
      return (
        item.details.map((detail) => (
          <a className="sub-links" id={detail.id} key={detail.subtitle} href={`#${detail.subtitle}`}>
            <FontAwesomeIcon className="accordion-arrow-icon" icon={faChevronRight} />
            <FontAwesomeIcon className="content-icon" icon={faMarkdown} />
            <span>{ detail.subtitle }</span>
          </a>
        ))
      );
    }
    if (item.type === 'checks') {
      return (
        item.details.map((detail) => (
          <label className="sub-links checkbox-label" htmlFor={detail.subtitle} key={detail.subtitle}>
            <input type="checkbox" id={detail.subtitle} className="checkbox" onChange={() => { window.location.pathname = '#projects'; }} />
            <span className="label">
              <FontAwesomeIcon
                className="content-icon"
                icon={icons[detail.id - 1].icon}
              />
              { detail.subtitle }
            </span>
          </label>
        ))
      );
    }
    return (
      item.details.map((detail) => (
        <a className="sub-links" id={detail.id} key={detail.subtitle} href={`#${detail.link}`} target="_blank" rel="noreferrer">
          <FontAwesomeIcon
            className="content-icon"
            icon={icons[detail.id - 1].icon}
          />
          <span className={detail.subtitle}>{ detail.value }</span>
        </a>
      ))
    );
  };

  return (
    <aside className="side-bar">
      { Sidebar.map((item, index) => (
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
              { handleAccodionLink(item) }
            </div>
          ) : ''}
        </div>
      ))}
    </aside>
  );
};

export default SideBar;
