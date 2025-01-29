import React from "react";

import "./SpecialMenu.css";

const SpecialMenu = () => {
  return (
    <>
      <div className="title-container">
        <p className="subtitle">Menu that fits your palate</p>
        <p>
          <img src="src\assets\spoon.svg" alt="Spoon" />
        </p>
        <h1 className="title">Today's Special</h1>
      </div>
      <br />
      <br />
      <br />
      <br />
      <section>
        <div className="about"></div>
        <div className="imag">
          <img src="src\assets\menu.png" alt="manu" className="abhi22" />
        </div>
        <div className="history"> </div>
      </section>
      <br />
      <br />
      <div className="title-container">
        <button>View More</button>
      </div>
    </>
  );
};

export default SpecialMenu;
