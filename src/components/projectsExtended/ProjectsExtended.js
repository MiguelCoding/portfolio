// figure out if this is nessesary or not. perhaps it can be put in a function and hoisted instead.

import React, { useEffect } from "react";
import './ProjectsExtended.css';
import { FaGithub } from "react-icons/fa";
//import {FiEyeOff} from "react-icons/fi";
import {FcAndroidOs} from "react-icons/fc";

import AOS from "aos";
import "aos/dist/aos.css";

const ProjectsExtended = () => {
    useEffect(() => {
        AOS.init({
        duration: 1000,
        });
    }, []);
    return (
        <section id="projects">
        <div className="container projects" data-aos="fade-up">
            <h2>Projects</h2>
            <div className="projects-grid">
            <div className="project" data-aos="fade-right">
                <div className="project-icon">
                <FaGithub color="#0a1930" size={22} />
                </div>
                <div className="project-text">
                <h3>Autocomplete AI</h3>
                <p>
                    Fill out the blanks here for all the possible projects that may arise in the future.
                </p>
                <a href="https://www.google.com"><h1>View Project</h1></a>
                </div>
            </div>
            <div className="project" data-aos="fade-left">
                <div className="project-icon">
                <FcAndroidOs color="#0a1930" size={22} />
                </div>
                <div className="project-text">
                <h3>Android development</h3>
                <p>
                    Fill out the blanks here for all the possible projects that may arise in the future.
                </p>
            </div>

            </div>
            </div>
        </div>
        </section>
    );
};

export default ProjectsExtended;