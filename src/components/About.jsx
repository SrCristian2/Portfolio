import React from "react";
import "../styles/AboutStyles.css";
import {
  SiJavascript,
  SiHtml5,
  SiReact,
  SiVite,
  SiRedux,
  SiNodedotjs,
  SiBootstrap,
  SiGit,
  SiCss3,
  SiExpress,
  SiFastify,
  SiJava,
  SiSpringboot,
  SiMongodb,
} from "react-icons/si";
import { DiNpm } from "react-icons/di";

const About = () => {
  return (
    <div className="body_about">
      <div className="about">
        <div className="name_container">
          <h2 className="myName">Cristian David Monsalve Alvarez</h2>
        </div>
        <div className="info_about">
          <div className="text_about">
            <span className="tags top-tags">
              &#60;body&#62; <br />
            </span>
            <p>
              I am a Full Stack developer living in Medellín, Colombia. I am
              passionate about programming, eager to learn and strengthen new
              knowledge.
            </p>
            <p>
              Well organized person, problem solver, independent and with great
              attention to detail. Fond of video games and hanging out with
              friends and family.
            </p>
            <p>
              Interested in the full stack aspect and working on ambitious
              projects with positive people.
            </p>
            <span className="tags bottom-tags">
              <br />
              &#60;&#47;body&#62;
            </span>
          </div>
          <div className="skills_container">
            <h2 className="title_skills">Skills</h2>
            <div className="skills_icons">
              <ul>
                <li className="li_js">
                  <span>
                    <SiJavascript className="icons js" />
                  </span>
                </li>
                <li className="li_html">
                  <span>
                    <SiHtml5 className="icons html" />
                  </span>
                </li>
                <li className="li_react">
                  <span>
                    <SiReact className="icons react" />
                  </span>
                </li>
                <li className="li_vite">
                  <span>
                    <SiVite className="icons vite" />
                  </span>
                </li>
                <li className="li_redux">
                  <span>
                    <SiRedux className="icons redux" />
                  </span>
                </li>
                <li className="li_npm">
                  <span>
                    <DiNpm className="icons npm" />
                  </span>
                </li>
                <li className="li_node">
                  <span>
                    <SiNodedotjs className="icons node" />
                  </span>
                </li>
                <li className="li_bootstrap">
                  <span>
                    <SiBootstrap className="icons bootstrap" />
                  </span>
                </li>
                <li className="li_git">
                  <span>
                    <SiGit className="icons git" />
                  </span>
                </li>
                <li className="li_css">
                  <span>
                    <SiCss3 className="icons css" />
                  </span>
                </li>
                <li className="li_css">
                  <span>
                    <SiExpress className="icons css" />
                  </span>
                </li>
                <li className="li_css">
                  <span>
                    <SiFastify className="icons css" />
                  </span>
                </li>
                <li className="li_css">
                  <span>
                    <SiJava className="icons css" />
                  </span>
                </li>
                <li className="li_css">
                  <span>
                    <SiSpringboot className="icons css" />
                  </span>
                </li>
                <li className="li_css">
                  <span>
                    <SiMongodb className="icons css" />
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
