
import React from "react";
import ProjectList from "../components/ProjectCard";

const Projects = () => {
  return (
    <div id="projects" className="min-h-screen bg-zinc-600 p-8">
      <div className="my-auto">
        <ProjectList />
      </div>
    </div>
  );
}

export default Projects;
