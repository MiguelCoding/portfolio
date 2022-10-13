import React, { useEffect } from "react";
import "./Socials.css";
import {  FaGithub } from "react-icons/fa";
import {TiSocialLinkedin} from "react-icons/ti"

import AOS from "aos";
import "aos/dist/aos.css";

const Socials = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);
  return (
    <section id="social">
      <div className="container subscribe" data-aos="fade-up">
        <h2>Socials!</h2>
        {/* placeholder for form input utilization in the future */}
        {/* <form>
          <div className="form-control">
            <input type="text" placeholder="Enter Your Email..." />
            <button>Subscribe</button>
          </div>
        </form> */}
        <div className="social-icons">
          <a href="https://github.com/MiguelCoding">
            <div className="social-icon">
              <FaGithub />
            </div>
          </a>

          <a href="https://www.linkedin.com/in/miguel-ruiz-02860732/">          
            <div className="social-icon">
              <TiSocialLinkedin />
            </div>
          </a>

        </div>
      </div>
    </section>
  );
};

export default Socials;
