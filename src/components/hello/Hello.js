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
          <a className="orange" href="https://github.com/PraisesPJMT" target="_blank" rel="noreferrer">&apos;https://github.com/PraisesPJMT&apos;</a>
          ;
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
          <a className="orange" href="https://docs.google.com/document/d/1UT2dALVTL1gE2cw7n67ZIFyi1tpZjLPGfFEBtJNI2Yc/edit?usp=sharing" target="_blank" rel="noreferrer">&apos;https://praises_musa.com/resume&apos;</a>
          ;
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
