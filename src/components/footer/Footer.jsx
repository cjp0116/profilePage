import React from "react";
import {
  BsFacebook,
  BsGithub,
  BsLinkedin,
} from "react-icons/bs";
import "./footer.css";

const Footer = () => {
  return (
    <footer>
      <a href="#" className="footer__logo">
        Jae Cho
      </a>
      <ul className="permalinks">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#experience">Experience</a>
        </li>
        <li>
          <a href="#portfolio">Portfolio</a>
        </li>
        <li>
          <a href="#services">Skills</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>

      <div className="footer__socials">
        <a href="https://facebook.com/jae.cho.12/">
          <BsFacebook />
        </a>
        <a href="https://github.com/cjp0116">
          <BsGithub />
        </a>
        <a href="https://www.linkedin.com/in/jae-cho-60171a15a/">
          <BsLinkedin />
        </a>
      </div>

      <div className="footer__copyright">
        <small>&copy; Jae Cho All rights reserved.</small>
      </div>
    </footer>
  );
};

export default Footer;
