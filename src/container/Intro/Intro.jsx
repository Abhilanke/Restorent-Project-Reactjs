import React from "react";

import "./Intro.css";

const Intro = () => {
  return (
    <section id="intro-video">
      <video muted loop controls>
        <source src="src\assets\meal.mp4" type="video/mp4" />
      </video>
    </section>
  );
};

export default Intro;
