import React from "react";
import "./portfolio.css";
import { portFolioData } from "../../data";

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio__container">
        {portFolioData.map(({ id, image, title, github, demo }) => (

          <article className="portfolio__item" key={id}>
            <div className="portfolio__item-img">
              <img src={image} alt="img1" />
            </div>
            <h3>{title}</h3>
            <div className="portfolio__item-cta">
              <a href={github} className="btn" target="_blank" rel="noreferrer">
                Github
              </a>
              <a target="_blank" href={demo} className="btn btn-primary" rel="noreferrer">
                Live Demo
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
