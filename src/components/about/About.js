import React from 'react';
import './About.css';
import Accordion from './Accordion';
import { Bio, Interest, Profiles } from './Personal';
import { ProBasic, TechStack, TechTools } from './Professional';
import AboutSnippets from './AboutSnippets';

const About = () => (
  <section className="about">
    <h2 className="sub-heading">_about</h2>
    <Accordion />
    <Bio />
    <Interest />
    <Profiles />

    <ProBasic />
    <TechStack />
    <TechTools />

    <AboutSnippets />
  </section>
);

export default About;
