import React, { useEffect } from "react";
import "./Download.css";
import { IconContext } from "react-icons";
import { FaFilePdf } from "react-icons/fa"
import AOS from "aos";
import "aos/dist/aos.css";

import resumeSdev from "../../assets/MAR-Resume-SDEV.pdf";


const Download = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);
  return (
    <section id="download">
      <div className="container download" data-aos="fade-up">
        <h2>Resume and CV</h2>
        <p className="u-text-small">
          Click below to download my resume or CV.
        </p>
        <IconContext.Provider value={{ size: "15" }}>
          <div className="download-icons">
            <a href={resumeSdev} download="my resume">
              <div className="download-icon">
                <FaFilePdf /> <p>Resume</p> 
              </div>
            </a>
            <div className="download-icon">
              <FaFilePdf /> <p>CV</p>
            </div>
          </div>
        </IconContext.Provider>
      </div>
    </section>
  );
};

export default Download;
