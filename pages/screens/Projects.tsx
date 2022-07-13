
import React from "react";
import FadeIn from "../../components/FadeIn";
import ProjectList from "../../components/ProjectCard";





const Projects = () => {

    return (
        <div id="projects" className="min-h-screen bg-slate-600 p-8 w-screen">
            <FadeIn className="m-auto max-w-screen h-content"
            >
                <ProjectList></ProjectList>
        </FadeIn>
        </div>
    );
}

export default Projects;
