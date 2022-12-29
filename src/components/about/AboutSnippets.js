import React from 'react';
import './About.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCommentDots } from '@fortawesome/free-solid-svg-icons';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import Avatar from '../../assets/coding.png';

const AboutSnippets = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 1024 },
      items: 5,
      slidesToSlide: 2,
    },
    desktop: {
      breakpoint: { max: 1024, min: 800 },
      items: 4,
    },
    tablet: {
      breakpoint: { max: 800, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <div className="snippet-container">
      <h3 className="sub-heading2">
        <span className="harsh">## </span>
        Code snippets showcase
      </h3>
      <Carousel responsive={responsive} autoPlay infiniteLoop>
        <div className="bio-snippet snippet-wrapper">
          <div className="snippet-header">
            <div className="profile-wrapper">
              <img src={Avatar} className="avatar" alt="Praises Tula Avatar" />
              <div className="user-details">
                <p className="username">@PraisesPJMT</p>
                <p className="login">5 months ago</p>
              </div>
            </div>
            <p className="details">
              <FontAwesomeIcon icon={faCommentDots} className="comment-icon" />
              Bio
            </p>
          </div>
          <div className="snippet">
            <p className="code">
              <span className="orange">const </span>
              <span className="purple">bio</span>
              {' = () => { '}
            </p>
            <div className="code-body">
              <p className="normal">
                <span className="orange">const </span>
                <span className="normal">location = </span>
                <span className="green">&apos;Nigeria&apos;</span>
                ;
              </p>
              <p className="normal">
                <span className="orange">const </span>
                <span className="normal">
                  passion = [
                  <span className="green">&apos;UI creation&apos;</span>
                  ,
                  <span className="green">&apos;animation&apos;</span>
                  ,
                  <span className="green">&apos;dynamic user experience&apos;</span>
                  ];
                </span>
              </p>
              <p className="normal">
                <span className="orange">const </span>
                <span className="normal">
                  currentActivity =
                  <span className="green">&apos;Learning new things&apos;</span>
                  ;
                </span>
              </p>
              <br />
              <p>
                <span className="orange">return </span>
                <span className="green">&apos;Looking for new opportunities&apos;</span>
                ;
              </p>
            </div>
            <p className="code-end">{'};'}</p>
          </div>
        </div>
        <div className="interest-snippet snippet-wrapper">
          <div className="snippet-header">
            <div className="profile-wrapper">
              <img src={Avatar} className="avatar" alt="Praises Tula Avatar" />
              <div className="user-details">
                <p className="username">@PraisesPJMT</p>
                <p className="login">5 months ago</p>
              </div>
            </div>
            <p className="details">
              <FontAwesomeIcon icon={faCommentDots} className="comment-icon" />
              Interests
            </p>
          </div>
          <div className="snippet">
            <p className="code">
              <span className="orange">const </span>
              <span className="purple">interest</span>
              {' = () => { '}
            </p>
            <div className="code-body">
              <p className="normal">
                <span className="orange">const </span>
                <span className="normal">projects = </span>
                <span className="green">&apos;Ambitious&apos;</span>
                ;
              </p>
              <p className="normal">
                <span className="orange">const </span>
                <span className="normal">team = </span>
                <span className="green">&apos;Positive people&apos;</span>
                ;
              </p>
              <p className="normal">
                <span className="orange">const </span>
                <span className="normal">employers = </span>
                <span className="green">&apos;goal oriented&apos;</span>
                ;
              </p>
              <br />
              <p className="normal">
                <span className="orange">const </span>
                <span className="normal">
                  hobbies = [
                  <span className="green">&apos;Liverpool FC&apos;</span>
                  ,
                  <span className="green">&apos;swimming&apos;</span>
                  ,
                  <span className="green">&apos;TV series&apos;</span>
                  ,
                  <span className="green">&apos;travelling&apos;</span>
                  ];
                </span>
              </p>
              <br />
              <p>
                <span className="orange">return </span>
                <span className="green">&apos;Focused and fun&apos;</span>
                ;
              </p>
            </div>
            <p className="code-end">{'};'}</p>
          </div>
        </div>
        <div className="profile-snippet snippet-wrapper">
          <div className="snippet-header">
            <div className="profile-wrapper">
              <img src={Avatar} className="avatar" alt="Praises Tula Avatar" />
              <div className="user-details">
                <p className="username">@PraisesPJMT</p>
                <p className="login">5 months ago</p>
              </div>
            </div>
            <p className="details">
              <FontAwesomeIcon icon={faCommentDots} className="comment-icon" />
              Profiles
            </p>
          </div>
          <div className="snippet">
            <p className="code">
              <span className="orange">const </span>
              <span className="purple">publicProfiles</span>
              {' = () => { '}
            </p>
            <div className="code-body">
              <p className="normal">
                <span className="orange">const </span>
                <span className="normal">linkedIn = </span>
                <a
                  className="purple"
                  href="https://www.linkedin.com/in/praises-tula"
                  target="_blank"
                  rel="noreferrer"
                >
                  &apos;https://www.linkedin.com/in/praises-tula&apos;
                </a>
                ;
              </p>
              <p className="normal">
                <span className="orange">const </span>
                <span className="normal">gitHub = </span>
                <a
                  className="purple"
                  href="https://twitter.com/PraisesPJMT"
                  target="_blank"
                  rel="noreferrer"
                >
                  &apos;https://twitter.com/PraisesPJMT&apos;
                </a>
                ;
              </p>
              <p className="normal">
                <span className="orange">const </span>
                <span className="normal">mastodon = </span>
                <a
                  className="purple"
                  href="https://ruby.social/@pjmt"
                  target="_blank"
                  rel="noreferrer"
                >
                  &apos;https://ruby.social/@pjmt&apos;
                </a>
                ;
              </p>
              <br />
              <p>
                <span className="orange">return </span>
                <span className="green">&apos;Official and social&apos;</span>
                ;
              </p>
            </div>
            <p className="code-end">{'};'}</p>
          </div>
        </div>
        <div className="basic-snippet snippet-wrapper">
          <div className="snippet-header">
            <div className="profile-wrapper">
              <img src={Avatar} className="avatar" alt="Praises Tula Avatar" />
              <div className="user-details">
                <p className="username">@PraisesPJMT</p>
                <p className="login">5 months ago</p>
              </div>
            </div>
            <p className="details">
              <FontAwesomeIcon icon={faCommentDots} className="comment-icon" />
              Professional
            </p>
          </div>
          <div className="snippet">
            <p className="code">
              <span className="orange">const </span>
              <span className="purple">prof</span>
              {' = () => { '}
            </p>
            <div className="code-body">
              <p className="normal">
                <span className="orange">const </span>
                <span className="normal">
                  softSkills = [
                  <span className="green">&apos;Remote prog.&apos;</span>
                  ,
                  <span className="green">&apos;Pair Prog.&apos;</span>
                  ,
                  <span className="green">&apos;Comms.&apos;</span>
                  ,
                  <span className="green">&apos;teamwork&apos;</span>
                  ,
                  <span className="green">&apos;leadership&apos;</span>
                  ];
                </span>
              </p>
              <br />
              <p className="normal">
                <span className="orange">const </span>
                <span className="normal">goal = </span>
                <span className="green">&apos;Continually increase my programming skills&apos;</span>
                ;
              </p>
              <p className="normal">
                <span className="orange">const </span>
                <span className="normal">mission = </span>
                <span className="green">&apos;Present better solutions to my employers&apos;</span>
                ;
              </p>
              <p className="normal">
                <span className="orange">const </span>
                <span className="normal">vision = </span>
                <span className="green">&apos;Uncovering new ideas to deliver great tech experience&apos;</span>
                ;
              </p>
              <br />
              <p>
                <span className="orange">return </span>
                <span className="green">&apos;Right developer for YOU&apos;</span>
                ;
              </p>
            </div>
            <p className="code-end">{'};'}</p>
          </div>
        </div>
        <div className="tech-stack-snippet snippet-wrapper">
          <div className="snippet-header">
            <div className="profile-wrapper">
              <img src={Avatar} className="avatar" alt="Praises Tula Avatar" />
              <div className="user-details">
                <p className="username">@PraisesPJMT</p>
                <p className="login">5 months ago</p>
              </div>
            </div>
            <p className="details">
              <FontAwesomeIcon icon={faCommentDots} className="comment-icon" />
              Stack
            </p>
          </div>
          <div className="snippet">
            <p className="code">
              <span className="orange">const </span>
              <span className="purple">stack</span>
              {' = () => { '}
            </p>
            <div className="code-body">
              <p className="normal">
                <span className="orange">const </span>
                <span className="normal">
                  languages = [
                  <span className="green">&apos;JavaScrip.&apos;</span>
                  ,
                  <span className="green">&apos;Ruby&apos;</span>
                  ,
                  <span className="green">&apos;Python&apos;</span>
                  ];
                </span>
              </p>
              <br />
              <p className="normal">
                <span className="orange">const </span>
                <span className="normal">
                  markup = [
                  <span className="green">&apos;HTML5&apos;</span>
                  ,
                  <span className="green">&apos;CSS3&apos;</span>
                  ];
                </span>
              </p>
              <br />
              <p className="normal">
                <span className="orange">const </span>
                <span className="normal">
                  frameworks = [
                  <span className="green">&apos;Rails&apos;</span>
                  ,
                  <span className="green">&apos;React&apos;</span>
                  ,
                  <span className="green">&apos;Bootstrap&apos;</span>
                  ,
                  <span className="green">&apos;Tailwind CSS&apos;</span>
                  ];
                </span>
              </p>
              <br />
              <p>
                <span className="orange">return </span>
                <span className="green">&apos;Full-Stack&apos;</span>
                ;
              </p>
            </div>
            <p className="code-end">{'};'}</p>
          </div>
        </div>
        <div className="tool-stack-snippet snippet-wrapper">
          <div className="snippet-header">
            <div className="profile-wrapper">
              <img src={Avatar} className="avatar" alt="Praises Tula Avatar" />
              <div className="user-details">
                <p className="username">@PraisesPJMT</p>
                <p className="login">5 months ago</p>
              </div>
            </div>
            <p className="details">
              <FontAwesomeIcon icon={faCommentDots} className="comment-icon" />
              Tools
            </p>
          </div>
          <div className="snippet">
            <p className="code">
              <span className="orange">const </span>
              <span className="purple">tools</span>
              {' = () => { '}
            </p>
            <div className="code-body">
              <p className="normal">
                <span className="orange">const </span>
                <span className="normal">
                  versionControl = [
                  <span className="green">&apos;Git&apos;</span>
                  ,
                  <span className="green"> &apos;GitHub&apos;</span>
                  ];
                </span>
              </p>
              <br />
              <p className="normal">
                <span className="orange">const </span>
                <span className="normal">
                  editors = [
                  <span className="green">&apos;VC Code&apos;</span>
                  ,
                  <span className="green"> &apos;SublimeText&apos;</span>
                  ,
                  <span className="green"> &apos;JetBrains IDEs&apos;</span>
                  ,
                  <span className="green"> &apos;Vim&apos;</span>
                  ];
                </span>
              </p>
              <br />
              <p className="normal">
                <span className="orange">const </span>
                <span className="normal">
                  UI = [
                  <span className="green">&apos;Figma&apos;</span>
                  ,
                  <span className="green"> &apos;Inkscape&apos;</span>
                  ,
                  <span className="green"> &apos;Adobe Suites&apos;</span>
                  ];
                </span>
              </p>
              <br />
              <p>
                <span className="orange">return </span>
                <span className="green">&apos;Full-Tech&apos;</span>
                ;
              </p>
            </div>
            <p className="code-end">{'};'}</p>
          </div>
        </div>
      </Carousel>
    </div>
  );
};

export default AboutSnippets;
