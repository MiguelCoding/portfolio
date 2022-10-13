import React, { useEffect } from "react";
import "./Download.css";
import { IconContext } from "react-icons";
import { FaFilePdf } from "react-icons/fa"
import AOS from "aos";
import "aos/dist/aos.css";

const Download = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);
  const onButtonClick = () => {
    fetch('MAR-Resume-SDEV.pdf').then(response => {
        response.blob().then(blob => {
            const fileURL = window.URL.createObjectURL(blob);
            let alink = document.createElement('a');
            alink.href = fileURL;
            alink.download = 'MAR-Resume-SDEV.pdf';
            alink.click();
        })
    })}
  return (
    <section id="download">
      <div className="container download" data-aos="fade-up">
        <h2>Resume and CV</h2>
        <p className="u-text-small">
          Click below to download my resume or CV.
        </p>
        <IconContext.Provider value={{ size: "15" }}>
          <div className="download-icons">
            <a  onClick={onButtonClick}>
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
