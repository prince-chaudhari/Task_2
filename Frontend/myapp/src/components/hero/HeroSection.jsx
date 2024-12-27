import React from "react";
import "../../assets/styles/HeroSection.css"; // Custom CSS file
import SpringClearanceBanner from "./SpringClearanceBanner";

const HeroSection = () => {
  return (
    <div className="hero-section">
      {/* Carousel */}
      <div
        id="heroCarousel"
        className="carousel slide"
        data-bs-ride="carousel"       // Auto-slide enabled
        data-bs-interval="2000"       // Carousel changes every 3 seconds
      >
        {/* Carousel Indicators */}
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#heroCarousel"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#heroCarousel"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#heroCarousel"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>

        {/* Carousel Images */}
        <div className="carousel-inner">
          {/* Slide 1 */}
          <div className="carousel-item active">
            <img
              src="/project_1/IMAGES/fashion-slideshow-01.jpg"
              className="d-block w-100"
              alt="Slide 1"
            />
          </div>
          {/* Slide 2 */}
          <div className="carousel-item">
            <img
              src="/project_1/IMAGES/fashion-slideshow-02.jpg"
              className="d-block w-100"
              alt="Slide 2"
            />
          </div>
          {/* Slide 3 */}
          <div className="carousel-item">
            <img
              src="/project_1/IMAGES/fashion-slideshow-03.jpg"
              className="d-block w-100"
              alt="Slide 3"
            />
          </div>
        </div>

        {/* Overlay Text Section */}
        <div className="overlay-text-left text-white">
          <div className="text-wrapper">
            <h1 className="display-1 fw-bold">Glamorous Glam</h1>
            <p className="lead mt-3 d-none d-md-block">
              From casual to formal, we've got you covered.
            </p>
            <button className="btn btn-dark btn-lg mt-4">
              Shop collection &rarr;
            </button>
          </div>
        </div>
      </div>

      <SpringClearanceBanner />
    </div>
  );
};

export default HeroSection;
