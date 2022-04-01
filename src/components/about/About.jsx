import React from "react";
import "./about.css";
import ME from "../../assets/me.png";

import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { VscFolder } from "react-icons/vsc";
const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="me" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Experience</h5>
              <small>3+ Years Working</small>
            </article>

            <article className="about__card">
              <FiUsers className="about__icon" />
              <h5>Clients</h5>
              <small>300+ Clients World Wide</small>
            </article>

            <article className="about__card">
              <VscFolder className="about__icon" />
              <h5>Projects</h5>
              <small>80+ Completed Projects</small>
            </article>
          </div>

          <p>
            I am a fullstack developer with background in systems administration, and network administrations.
            After my service in the Marine Corps as an data systems administrator, I've naturally gravitated towards the tech industry.
            I'm looking forward to combining my previous experiences with programming skills to be able to contribute to the team! :)
          </p>

          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
