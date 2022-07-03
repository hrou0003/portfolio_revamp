
import React from "react";
import ExperienceCard from "./components/ExperienceCard/ExperienceCard";
import ProjectCard from "./components/Project/ProjectCard";

const Projects = () => {
    return (
        <div className="min-h-screen bg-zinc-600 p-8">
            <div className="my-auto">
                <ProjectCard />
            </div>
        </div>
    );
}

export default Projects;
