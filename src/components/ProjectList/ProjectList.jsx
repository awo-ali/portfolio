import React from "react";
import "./ProjectList.scss";
import Project from "../Project/Project";

const ProjectList = ({ projects }) => {
  const projectsArr = (projects) => {
    return projects.map((projects) => (
      <Project
        language={projects.language}
        title={projects.title}
        image={projects.image}
        description={projects.description}
        code={projects.code}
        preview={projects.preview}
      />
    ));
  };

  return (
    <div id="projects" className="cardsContainer" projects={projects}>
      <h1 className="cardsContainer__heading">My Projects</h1>
      <div className="cardsContainer__content">
      {projectsArr(projects)}
      </div>
    </div>
  );
};

export default ProjectList;
