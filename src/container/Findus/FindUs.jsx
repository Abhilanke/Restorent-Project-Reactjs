import React from "react";

const FindUs = () => {
  return (
    <section id="home">
      <div className="info">
        <p>Contact</p>
        <p className="spoon__img">
          <img src="src\assets\spoon.svg" alt="Spoon" />
        </p>
        <h1>Find Us</h1>
        <br />
        <p>Worli Mumbai</p>
        <p>Opening Hours</p>
        <p>
          Mon - Fri: 10:00 Am - 02:00 Am <br />
          Sat - Sun: 10:00 Am - 03:00 Am
        </p>

        <button>Visit Us</button>
      </div>
      <div className="image">
        <img src="src\assets\findus.png" alt="Image" className="welcome" />
      </div>
    </section>
  );
};

export default FindUs;
