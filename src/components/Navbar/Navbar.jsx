import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <>
      <div id="navbar">
        <div id="imgagenav">
          <img src="src\assets\navlogo.png" alt="Logo" className="logo" />
        </div>
        <div id="menuitems">
          <ul>
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#menu">Menu</a>
            </li>
            <li>
              <a href="#home">Awards</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </div>
        <div id="options">
          <ul>
            <li>
              <a href="#login">Login/Register /</a>
            </li>
            <li>
              <a href="#booktable">Book Table</a>
            </li>
          </ul>
        </div>
        <div className="rightmenu">
          <ul>
            <li>
              <a href="" id="menu-item">
                <i class="fa-solid fa-bars"></i>
              </a>
              <ul className="megamenu" id="mega-menu">
                <li>
                  <a href="#about">Home</a>
                </li>
                <li>
                  <a href="#skills">About</a>
                </li>
                <li>
                  <a href="#projects">Menu</a>
                </li>
                <li>
                  <a href="#home">Awards</a>
                </li>
                <li>
                  <a href="#experiance">Contact</a>
                </li>
                <li>
                  <a href="#contact">Login/Register</a>
                </li>
                <li>
                  <a href="#contact">Book Table</a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navbar;
