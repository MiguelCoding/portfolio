import React, { useEffect } from "react";
import "./Header.css";
import "../UI/Button/Button.css";
import selfHeader from "../../assets/miguel.jpg";
import { BsMouse } from "react-icons/bs";

import AOS from "aos";
import "aos/dist/aos.css";

const Header = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);
  return (
    <section id="header">
      <div className="container header">
        <div className="header-left" data-aos="fade-right">
          <h1>
            <span>Computer Science Bachelors from Oregon State University</span>
            <span>New grad with 5 years of military experience</span>
            </h1>
          <p className="u-text-small">
            This Portfolio page is used to display my desire and continued effort to code and design AI related projects. 
            More projects to come as they are completed.
            
          </p>
        </div>
        <div className="header-right" data-aos="fade-left">
          <img src={selfHeader} alt="miguel" />
        </div>
      </div>
      <div className="floating-icon">
        <a href="#features">
          <BsMouse color="#fff" size={25} className="mouse" />
        </a>
      </div>
    </section>
  );
};

export default Header;
