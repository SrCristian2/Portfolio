import React from "react";
import Typewriter from "typewriter-effect";
import "../styles/HomeStyles.css";
import cv from "../assets/cv_cristian.pdf"


const Home = () => {
  return (
    <div className="body_home">
      <section className="home">
        <h3 className="skills">
          <span>
            <Typewriter
              options={{
                strings: [
                  "Full Stack Developer",
                  "Backend Developer",
                  "Web Developer"
                ],
                autoStart: true,
                loop: true,
              }}
            />
          </span>
        </h3>
        <h1 className="myName">Cristian David Monsalve Alvarez</h1>
        <a
          href={cv}
          download="CV_Cristian_D_Monsalve_A"
          className="Download_Cv_Btn"
        >
          {/* <span></span> */}
          {/* <span></span> */}
          {/* <span></span> */}
          {/* <span></span> */}
          DOWNLOAD CV
        </a>
      </section>
    </div>
  );
};

export default Home;
