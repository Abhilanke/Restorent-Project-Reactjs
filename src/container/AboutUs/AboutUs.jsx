import React from "react";

import "./AboutUs.css";

const AboutUs = () => {
  return (
    <>
      <section id="about">
        <div className="about">
          <h1>About Us</h1>
          <p>
            <img src="src\assets\spoon.svg" alt="Spoon" />
          </p>
          <p>
            Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit. Quis
            Pharetra Adipiscing Ultrices Vulputate Posuere Tristique. In Sed
            Odio Nec Aliquet Eu Proin Mauris Et.
          </p>
          <button>Know More</button>
        </div>
        <div className="image" id="bgimg">
          <img id="knifeimage" src="src\assets\knife.png" alt="Knife" />
        </div>
        <div className="history">
          <h1>Our History</h1>
          <p>
            <img src="src\assets\spoon.svg" alt="Spoon" />
          </p>
          <p>
            Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit. Quis
            Pharetra Adipiscing Ultrices Vulputate Posuere Tristique. In Sed
            Odio Nec Aliquet Eu Proin Mauris Et.
          </p>
          <button>Know More</button>
        </div>
      </section>
    </>
  );
};

export default AboutUs;
