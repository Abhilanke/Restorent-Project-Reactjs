import React from "react";

import "./Chef.css";

const Chef = () => {
  return (
    <section id="chef">
      <div id="chef-image">
        <img src="src\assets\chef.png" alt="chef" />
      </div>
      <div id="chef-text">
        <p>Chef's Word</p>
        <p>
          <img src="src\assets\spoon.svg" alt="Spoon" />
        </p>
        <h1>What we believe in</h1>
        <p>
          <img src="src\assets\quote.png" alt="qoute" /> Lorem Ipsum Dolor Sit
          Amet, Consectetur Adipiscing Elit Auctor Sit. Auctor Sit Iaculis In
          Arcu. Vulputate Nulla Lobortis Mauris Eget Sit. Nulla Scelerisque
          Scelerisque Congue Ac Consequat, Aliquam Molestie Lectus Eu. Congue
          Iaculis Integer Curabitur Semper Sit Nunc.
        </p>
        <p id="name">Kevin Luo</p>
        <p>Chef & Founder</p>
        <p id="chef-sign">
          <img src="src\assets\sign.png" alt="Chef-Sign-Image" />
        </p>
      </div>
    </section>
  );
};

export default Chef;
