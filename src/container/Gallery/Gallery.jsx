import React from "react";

import "./Gallery.css";

const Gallery = () => {
  return (
    <section id="home">
      <div className="info">
        <p>Instagram</p>
        <p className="spoon__img">
          <img src="src\assets\spoon.svg" alt="Spoon" />
        </p>
        <h2>Photo Gallery</h2>
        <br />
        <p>
          Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit. Volutpat
          Mattis Ipsum Turpis Elit Elit Scelerisque Egestas Mu.
        </p>

        <button>View More</button>
      </div>
      <div className="image">
        <div id="carouselExample" class="carousel slide">
          <div class="carousel-inner">
            <div class="carousel-item active">
              <img
                src="src\assets\gallery01.png"
                alt="Image"
                className="abhi"
              />
            </div>
            <div class="carousel-item">
              <img
                src="src\assets\gallery02.png"
                alt="Image"
                className="abhi"
              />
            </div>
            <div class="carousel-item">
              <img
                src="src\assets\gallery03.png"
                alt="Image"
                className="abhi"
              />
            </div>
            <div class="carousel-item">
              <img
                src="src\assets\gallery04.png"
                alt="Image"
                className="abhi"
              />
            </div>
          </div>
          <button
            class="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExample"
            data-bs-slide="prev"
          >
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button
            class="carousel-control-next"
            type="button"
            data-bs-target="#carouselExample"
            data-bs-slide="next"
          >
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
