import React from 'react';
import ProjectCard from './ProjectCard';
// eslint-disable-next-line import/no-cycle,import/named
import { Projects } from '../../assets/data';

const ProjectList = () => (
  <div className="project-list">
    <h3 className="sub-heading2">
      <span className="harsh">## </span>
      projects
      <span className="text">
        <span className="mono"> &frasl; </span>
        all
      </span>
    </h3>
    <div className="projects-container">
      { Projects.map((project) => (
        <ProjectCard key={project.id} project={project} />
      ))}
    </div>
  </div>
);

export default ProjectList;
