import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuoteLeft, faQuoteRight } from '@fortawesome/free-solid-svg-icons';
import { Testimonials } from '../../assets/data';
import './Hello.css';

const Hello = () => (
  <section id="hello">
    <article>
      <div className="headline">
        <h1>Praises Tula</h1>
        <p className="norm">Hi, my name is</p>
        <p className="sub-title">&gt; Full-Stack Developer</p>
      </div>
      <div className="headline-header">
        Detail-oriented software developer with great passion for UI creation, effects,
        animation and dynamic user experiences. Major tech stack includes Ruby-on-Rails,
        Postgresql, JavaScript, TypeScript, React, and Redux. Devoted to developing
        customized software to meet organisational needs, highlight
        their core competencies, and further their success.
      </div>
      <div className="green-bg" />
      <div className="purple-bg" />
      <div>
        <p className="comment">
          <span className="mono">&frasl; &frasl; </span>
          find my profile on Github:
        </p>
        <p className="code">
          <span className="purple">const </span>
          <span className="green">githubLink</span>
          {' = '}
          &apos;
          <a className="orange" href="https://github.com/PraisesPJMT" target="_blank" rel="noreferrer">https://github.com/PraisesPJMT</a>
          &apos;;
        </p>
      </div>
      <div>
        <p className="comment">
          <span className="mono">&frasl; &frasl; </span>
          find my resume:
        </p>
        <p className="code">
          <span className="purple">const </span>
          <span className="green">resumeLink</span>
          {' = '}
          &apos;
          <a className="orange" href="https://drive.google.com/file/d/1G0vS5TSJm1x2tXJpjAzC8Q6H8p-ckPnF/view?usp=sharing" target="_blank" rel="noreferrer">https://praises_musa.com/resume</a>
          &apos;;
        </p>
      </div>
    </article>
    <aside>
      <div className="green-bg" />
      <div className="purple-bg" />
      <div className="carl-container">
        <div className="outer">
          { Testimonials.map((testament) => (
            <div key={`${testament.name}${testament.id}`} className="testimonial-card" style={{ '--delay': testament.delay }}>
              <div className="testimonial">
                <p className="quote">
                  <FontAwesomeIcon className="left-quote-icon" icon={faQuoteLeft} />
                  { testament.testament }
                  <FontAwesomeIcon className="right-quote-icon" icon={faQuoteRight} />
                </p>
                <div className="profile-wrapper">
                  <div className="quote-author-wrapper user-details">
                    <a className="username" href={testament.link} target="_blank" rel="noreferrer">
                      <span>{ testament.name }</span>
                    </a>
                    <p className="quote-author-location login">
                      { testament.city }
                      ,
                      {' '}
                      { testament.country }
                    </p>
                  </div>
                  <a className="quote-link" href={testament.link} target="_blank" rel="noreferrer">
                    <img className="quote-author-avatar" src={testament.photo} alt={testament.name} />
                  </a>
                </div>
              </div>
            </div>
          )) }
        </div>
      </div>
    </aside>
  </section>
);

export default Hello;
