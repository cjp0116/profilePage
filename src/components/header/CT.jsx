import React from "react";
import resume from "../../assets/Jae_Cho_Resume2022.pdf";
const CT = () => {
  return (
    <div className="cta">
      <a href={resume} download className="btn">
        Download CV
      </a>
      <a href="#contact" className="btn btn-primary">
        Let's talk
      </a>
    </div>
  );
};

export default CT;
