import React from "react";
import "../styles/ContactStyles.css";
import logo from "../assets/snapcode.svg";

const Contact = () => {
  return (
    <div className="body_contact">
      <div className="contact">
        <div className="title_contact_container">
          <h2 className="title_contact">Contact me:</h2>
        </div>
        <div className="contact_info_container">
          <div className="logo_container">
            <img src={logo} alt="my_logo" />
          </div>
          <div className="accounts_container">
            <ul className="accounts_ul">
              <li>
                <a
                  href="https://www.instagram.com/cristian_monsalve8/"
                  target="_blank"
                >
                  <i className="bx bxl-instagram"></i>
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/cristian-monsalve-74630b242/"
                  target="_blank"
                >
                  <i className="bx bxl-linkedin"></i>
                </a>
              </li>
              <li>
                <a href="https://github.com/SrCristian2" target="_blank">
                  <i className="bx bxl-github"></i>
                </a>
              </li>
              <li>
                <a
                  href="mailto:cristiancros12@gmail.com?subject=Job%20opportunity"
                  target="_blank"
                >
                  <i className="bx bxl-gmail"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
