import React, { useState } from "react";
import "./nav.css";
import {
  AiOutlineHome,
  AiOutlineUser,
  AiOutlineContacts,
} from "react-icons/ai";
import { BiBook } from "react-icons/bi";
import { BsBriefcase } from "react-icons/bs";

const Nav = () => {
  const [activeNav, setActiveNav] = useState("#");
  return (
    <nav>
      <a
        onClick={() => setActiveNav("#")}
        href="#"
        className={activeNav === "#" && "active"}
      >
        <AiOutlineHome />
      </a>
      <a
        onClick={() => setActiveNav("#about")}
        href="#about"
        className={activeNav === "#about" && "active"}
      >
        <AiOutlineUser />
      </a>
      <a
        onClick={() => setActiveNav("#experience")}
        href="#experience"
        className={activeNav === "#experience" && "active"}
      >
        <BiBook />
      </a>
      <a
        onClick={() => setActiveNav("#portfolio")}
        href="#portfolio"
        className={activeNav === "#portfolio" && "active"}
      >
        <BsBriefcase />
      </a>
      <a
        onClick={() => setActiveNav("#contact")}
        href="#contact"
        className={activeNav === "#contact" && "active"}
      >
        <AiOutlineContacts />
      </a>
    </nav>
  );
};

export default Nav;
