import React from "react";
import "./nav.css";
import {
  AiOutlineHome,
  AiOutlineUser,
  AiOutlineContacts,
} from "react-icons/ai";
import { BiBook } from "react-icons/bi";
import { BsBriefcase } from "react-icons/bs";
const Nav = () => {
  return (
    <nav>
      <a href="#">
        <AiOutlineHome />
      </a>
      <a href="#about">
        <AiOutlineUser />
      </a>
      <a href="#experience">
        <BiBook />
      </a>
      <a href="#portfolio">
        <BsBriefcase />
      </a>
      <a href="#contact">
        <AiOutlineContacts />
      </a>
    </nav>
  );
};

export default Nav;
