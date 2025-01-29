import React from "react";

import "./Header.css";
const Header = () => {
  return (
    <section id="home">
      <div className="info">
        <p>Chase the new flavour</p>
        <p className="spoon__img">
          <img src="src\assets\spoon.svg" alt="Spoon" />
        </p>
        <h1>THE KEY TO FINE DINING</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Id eaque
          corrupti qui eligendi facilis repudiandae illo mollitia placeat, ab
          alias?
        </p>
        <button>Explore Menu</button>
      </div>
      <div className="image">
        <img src="src\assets\welcome.png" alt="Top Image" className="welcome" />
      </div>
    </section>
  );
};

export default Header;
