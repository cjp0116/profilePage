import React from "react";
import "./services.css";
import { BsCheck } from "react-icons/bs";

const Services = () => {
  return (
    <section id="services">
      <h5>What I Offer</h5>
      <h2>Technical Skills</h2>
      <div className="services__container container">
        <article className="service">

          <div className="service__head">
            <h3>Languages</h3>
          </div>

          <ul className="service__list">
            <li>
              <BsCheck className="service__list-icon" />
              <p>JavaScript</p>
            </li>
            <li>
              <BsCheck className="service__list-icon" />
              <p>Python</p>
            </li>
            <li>
              <BsCheck className="service__list-icon" />
              <p>PHP</p>
            </li>
          </ul>
        </article>
        {/* END OF Languages*/}

        <article className="service">
          <div className="service__head">
            <h3>Concepts</h3>
          </div>

          <ul className="service__list">
            <li>
              <BsCheck className="service__list-icon" />
              <p>Object Oriented Design</p>
            </li>
            <li>
              <BsCheck className="service__list-icon" />
              <p>Test Driven Development</p>
            </li>
            <li>
              <BsCheck className="service__list-icon" />
              <p>Continuous Development</p>
            </li>
            <li>
              <BsCheck className="service__list-icon" />
              <p>Continuous Integration</p>
            </li>
            <li>
              <BsCheck className="service__list-icon" />
              <p>Scalable Architecture</p>
            </li>
          </ul>
        </article>
        {/* END of concepts */}

        <article className="service">
          <div className="service__head">
            <h3>Cloud Technologies</h3>
          </div>

          <ul className="service__list">
            <li>
              <BsCheck className="service__list-icon" />
              <p>AWS (EC2, VPC, RDS, S3, Route53).</p>
            </li>
            <li>
              <BsCheck className="service__list-icon" />
              <p>Heroku</p>
            </li>
            <li>
              <BsCheck className="service__list-icon" />
              <p>Google App Engine</p>
            </li>
            <li>
              <BsCheck className="service__list-icon" />
              <p>Serverless Architecture</p>
            </li>
          </ul>
        </article>
        {/* Cloud */}
      </div>
    </section>
  );
};

export default Services;
