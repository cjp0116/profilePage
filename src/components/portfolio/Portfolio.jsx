import React from "react";
import "./portfolio.css";

import IMG1 from "../../assets/portfolio1.jpg";
import IMG2 from "../../assets/portfolio2.jpg";
import IMG3 from "../../assets/portfolio3.jpg";
import IMG4 from "../../assets/portfolio4.jpg";
import IMG5 from "../../assets/portfolio5.png";
import IMG6 from "../../assets/portfolio6.jpg";

const data = [
  {
    id: 1,
    image: IMG1,
    title: "Happy-1",
    github: "https://github.com/cjp0116",
    demo: "https://happy-1.com",
  },
  {
    id: 2,
    image: IMG2,
    title: "LETS",
    github: "https://github.com/cjp0116/LETS",
    demo: "http://descriptive-jellyfish.surge.sh",
  },
  {
    id: 3,
    image: IMG3,
    title: "AllRecipes",
    github: "https://github.com/allRecipes",
    demo: "http://evening-anchorage-37505.herokuapp.com/",
  },
  {
    id: 4,
    image: IMG4,
    title: "PathAlgo",
    github: "https://github.com/pathAlgo",
    demo: "https://github.com/pathAlgo",
  },
];

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio__container">
        {data.map(({ id, image, title, github, demo }) => (
          
          <article className="portfolio__item" key={id}>
            <div className="portfolio__item-img">
              <img src={image} alt="img1" />
            </div>
            <h3>{title}</h3>
            <div className="portfolio__item-cta">
              <a href={github} className="btn" target="_blank">
                Github
              </a>
              <a target="_blank" href={demo} className="btn btn-primary">
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
