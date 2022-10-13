import React from "react";
import "./Footer.css";

import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaReact,
} from "react-icons/fa";

const Footer = () => {
  return (
    <section id="footer">
      <div className="container footer">
        {/* <div className="footer-box">
          <h4>Useful Links</h4>
          <div className="footer-links">
            <a href="#">&bull; Support</a>
            <a href="#">&bull; About</a>
          </div>
        </div> */}
        {/* <div className="footer-box">
          <h4>Support</h4>
          <div className="footer-links">
            <a href="#">&bull; Support</a>
            <a href="#">&bull; About</a>
          </div>
        </div> */}
        
        <div className="footer-box">
          <FaReact color="#fff" size={33} />
          <h4>Contact Details</h4>
          <div className="footer-contact u-text-small">
            <p>
              <FaMapMarkerAlt /> &nbsp; Address: MA, United States.
            </p>
            <p>
              <FaPhoneAlt /> &nbsp; Phone: +1 904 240 6265.
            </p>
            <p>
              <FaEnvelope /> &nbsp; Email: miguelruizjax@gmail.com
            </p>
            {/* <p>
              <FaGlobe /> &nbsp; Website: 
            </p> */}
          </div>
        </div>
        {/* add the logo once completed */}
        {/* <div className="footer-box">
          <img src={logo} alt="logo" />
          <p className="u-text-small">&copy; Copyright 2021. Miguel Ruiz</p>
        </div> */}
      </div>
    </section>
  );
};

export default Footer;
