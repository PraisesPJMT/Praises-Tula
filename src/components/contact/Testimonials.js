import React from 'react';
import { faQuoteLeft, faQuoteRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Carousel } from 'react-responsive-carousel';
import Michael from '../../assets/mishael_mesfin.png';
import Sharon from '../../assets/sharon_kessio.png';
import Aakash from '../../assets/aakash_verma.png';

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

const testimonials = [
  {
    id: 1,
    name: 'Michael Mesfin',
    photo: Michael,
    link: 'https://www.linkedin.com/in/michael-mesfin-haileyesus/',
    city: 'Addis Ababa',
    country: 'Ethiopia',
    testament: 'Praises is a great collaborator. When working with him\n'
      + '        he makes you feel calm and interested. He has proven\n'
      + '        himself as reliable, exceptionally having great attention to\n'
      + '        detail and his obsession with making great UI transpires through\n'
      + '        his work.\n'
      + '        His code reviews are well written and well explained\n'
      + '        for someone so early in the Microverse program. I would recommend\n'
      + '        Praises for the role of Software Developer and so should you!',

  },
  {
    id: 2,
    name: 'Sharon Kessio',
    photo: Sharon,
    link: 'https://www.linkedin.com/in/sharon-kessio/',
    city: 'Nairobi',
    country: 'Kenya',
    testament: 'I was on the same group with Praises where we '
      + 'collaborated on JavaScript, Html, CSS, react, '
      + 'ruby and capstone projects. Praise is easy to '
      + 'work with as he keeps time, fulfilled his part '
      + 'of agreements we had, well versed with the topics '
      + 'at hand as he did prior research, he is also keen '
      + 'on details which reduced time spent fixing bugs. I '
      + 'enjoyed working with Praises.',

  },
  {
    id: 3,
    name: 'Aakash Verma',
    photo: Aakash,
    link: 'https://www.linkedin.com/in/skyv2022/',
    city: 'Chennai',
    country: 'India',
    testament: 'Praises is an intelligent and deeply creative person. '
      + 'He is thorough and has a great eye for detail. I worked with '
      + 'Praises on several projects and I was always inspired by his '
      + 'outstanding technical ability, critical thinking and tenacity '
      + 'for seeing things through. Not only were his technical skills '
      + 'robust, but he also shined when it came to accuracy. When Praises '
      + 'was working on a project, our error-correction needs were always '
      + 'reduced by half or more thanks to his outstanding diligence and '
      + 'attention to detail. In short, Praises is a delight and an incredible '
      + 'asset to anyone lucky enough to work with him.',
  },
];

const Testimonial = () => (
  <div className="testimonial-container">
    <h3 id="testaments" className="sub-heading2">
      <span className="harsh">## </span>
      Testimonials
    </h3>
    <Carousel responsive={responsive} autoPlay infiniteLoop interval={10000}>
      { testimonials.map((testament) => (
        <div key={testament.name} className="testimonial">
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
      )) }
    </Carousel>
  </div>
);

export default Testimonial;
