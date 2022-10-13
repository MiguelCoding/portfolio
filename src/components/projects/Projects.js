import React, { useEffect } from "react";
import "./Projects.css";
import { FaGithub } from "react-icons/fa";
import jetsonUGV from "../../assets/jetson-ugv.png";
import Project from "./Project";
import { ProjectList } from "./data";

import AOS from "aos";
import "aos/dist/aos.css";

const Projects = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);
  return (
    <section id="projects">
      <div className="container projects">
        <div className="title" data-aos="fade-up">
          <FaGithub color="orangered" size={30} />
          <a href="https://github.com/MiguelCoding"><h2>Projects</h2></a>
          <p className="u-text-small">
            Projects that I have been involved in or developed can be found below or in my github.
          </p>
        </div>
        <div className="projects-content">
          <div className="projects-left" data-aos="fade-right">
            <img src={jetsonUGV} alt="UGV" />
          </div>
          <div className="projects-right" data-aos="fade-left">
            {ProjectList.map((project) => (
              <Project
                key={project.id}
                icon={project.icon}
                heading={project.heading}
                text={project.text}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
