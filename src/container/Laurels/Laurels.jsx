import React from "react";

import "./Laurels.css";

const Laurels = () => {
  return (
    <section id="home">
      <div className="info">
        <p>Awards & recognition</p>
        <p className="spoon__img">
          <img src="src\assets\spoon.svg" alt="Spoon" />
        </p>
        <h2>Our Laurels</h2>
        <br />

        <p className="award">
          <img src="src\assets\award01.png" alt="award" />
          <div className="award-content">
            <h1 className="award-title">Rising Star</h1>
            <p className="award-text">
              Lorem ipsum dolor sit amet, consectetur.
            </p>
          </div>
        </p>
        <p className="award">
          <img src="src\assets\award02.png" alt="award" />
          <div className="award-content">
            <h1 className="award-title">Bib Gourmond</h1>
            <p className="award-text">
              Lorem ipsum dolor sit amet, consectetur.
            </p>
          </div>
        </p>
        <p className="award">
          <img src="src\assets\award03.png" alt="award" />
          <div className="award-content">
            <h1 className="award-title">AA Hospitality</h1>
            <p className="award-text">
              Lorem ipsum dolor sit amet, consectetur.
            </p>
          </div>
        </p>
        <p className="award">
          <img src="src\assets\award05.png" alt="award" />
          <div className="award-content">
            <h1 className="award-title">Outstanding Chef</h1>
            <p className="award-text">
              Lorem ipsum dolor sit amet, consectetur.
            </p>
          </div>
        </p>
      </div>
      <div className="image">
        <img src="src\assets\laurels.png" alt="Image" className="welcome" />
      </div>
    </section>
  );
};

export default Laurels;
