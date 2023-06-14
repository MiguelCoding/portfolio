import React from "react";
import "./Project.css";
import { BsHexagon } from "react-icons/bs";

const Project = ({ icon, heading, text , webAddress}) => {
  return (
    <div className="project">
      <div className="project-icon">
        <BsHexagon color="#fc5412" size={55} />
        <div className="inner-icon">{icon}</div>
      </div>
      <div className="project-text">
        <a href={webAddress}><h3>{heading}</h3></a>
        <p className="u-text-small">{text}</p>
      </div>
    </div>
  );
};

export default Project;
