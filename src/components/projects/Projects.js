import React from 'react';
import './Projects.css';
import ProjectsAccordion from './ProjectsAccordion';
// eslint-disable-next-line import/no-cycle
import ProjectList from './ProjectList';

const Projects = () => (
  <section className="projects">
    <h2 className="sub-heading">_projects</h2>
    <ProjectsAccordion />
    <ProjectList />
  </section>
);

export default Projects;
