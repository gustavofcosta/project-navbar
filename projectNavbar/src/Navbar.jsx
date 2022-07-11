import React, { useState, useRef, useEffect } from "react";
import { FaBars, FaTwitter } from "react-icons/fa";
import { AiOutlineMenu } from "react-icons/ai";
// import { links, social } from "./data";

const Navbar = () => {
  return (
    <nav>
      <div className="nav-center">
        <div className="nav-header">
          <img src="logo.svg" alt="logo" className="logo" />
          <button className="nav-toggle">
            <AiOutlineMenu />
          </button>
        </div>
        <div className="links-container" styled={{ height: "200px" }}></div>
        <ul className="links-container"></ul>
      </div>
    </nav>
  );
};

export default Navbar;
