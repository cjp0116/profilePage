import React from "react";
import "./experience.css";
import { BsPatchCheckFill } from "react-icons/bs";
import { FaServer, FaDatabase, FaLaptop } from 'react-icons/fa';
import { frontendData, backendData, databaseData } from "../../data";
const Experience = () => {
  return (
    <section id="experience">
      <h5>What Skills I Have</h5>
      <h2>My Experiences</h2>

      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>Frontend Development  <FaLaptop /></h3>

          <div className="experience__content">
            {frontendData.map(({ id, title, skillLevel }) => (
              <article className="experience__details" key={id}>
                <BsPatchCheckFill className="experience__details-icon" />
                <div>
                  <h4>{title}</h4>
                  <small className="text-light">{skillLevel}</small>
                </div>
              </article>
            ))}
          </div>
        </div>

        <div className="experience__backend">
          <h3>Backend Development  <FaServer /></h3>
          <div className="experience__content">
            {backendData.map(({ id, title, skillLevel }) => (
              <article className="experience__details" key={id}>
                <BsPatchCheckFill className="experience__details-icon" />
                <div>
                  <h4>{title}</h4>
                  <small className="text-light">{skillLevel}</small>
                </div>
              </article>
            ))}
          </div>
        </div>


        <div className="experience__backend">
          <h3>
            Databases <FaDatabase />
          </h3>
          <div className="experience__content">
            {databaseData.map(({ id, title, skillLevel }) => (
              <article className="experience__details" key={id}>
                <BsPatchCheckFill className="experience__details-icon" />
                <div>
                  <h4>{title}</h4>
                  <small className="text-light">{skillLevel}</small>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
