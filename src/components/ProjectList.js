import React from "react";
import ProjectItem from "./ProjectItem";

function ProjectList({ projects }) {
  console.log(projects);
  let projectElements=[]
  for (let project of projects){
    
    projectElements.push(
      <ProjectItem 
      key={project.id}
      name={project.name}
      technologies={project.technologies}
      about={project.about}
      />
    )
  
  }
  return (
    <div id="projects">
      <h2>My Projects</h2>
      <div id="project-list">
      {projectElements}
      </div>
    
    </div>
  );
}

export default ProjectList;

