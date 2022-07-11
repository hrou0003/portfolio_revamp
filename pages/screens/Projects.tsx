
import React from "react";
import BorderBox from "../../components/BorderBox";
import ProjectList from "../../components/ProjectCard";


const Projects = () => {
    return (
        <div className="min-h-screen bg-slate-600 p-8 w-screen">
            <div className="m-auto w-[70vw] h-content">
                <ProjectList></ProjectList>
            </div>
        </div>
    );
}

export default Projects;
