import React from "react";
import { FaGithub } from 'react-icons/fa';
import projects from './projects.json';
import './style.css';

function Project() {

    return (
        <div className="projects">
            {
                projects && projects.length > 0 && projects.map((project) =>
                <div className="project">
                    <img src={require('../../assets/images/' + project.image + '.png')} alt={project.title} />
                    <div className="project-info">
                        <h3><a href={project.appLink}>{project.title}</a></h3>
                        <i><a href={project.githubLink}><FaGithub /></a></i>
                    </div>
                </div>)
            }
        </div>
    )
}

export default Project;