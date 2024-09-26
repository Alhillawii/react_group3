import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
// import './custom.css';  

export default function Testimonial() {
  return (
    <>
      <div className="container-xxl py-5 wow fadeInUp" data-wow-delay="0.1s">
        <div className="container">
          <div className="text-center">
            <h6 className="section-title bg-white text-center text-primary px-3">
              Testimonial
            </h6>
            <h1 className="mb-5">Our Students Say!</h1>
          </div>
          <OwlCarousel
            className="owl-theme testimonial-carousel"
            loop
            margin={10}
            // nav
            items={2}
            autoplay
            autoplayTimeout={3000}
            autoplayHoverPause
          >
            <div className="testimonial-item text-center">
              <img
                className="border rounded-circle p-2 mx-auto mb-3"
                src="https://themewagon.github.io/elearning/img/testimonial-2.jpg"
                style={{ width: 80, height: 80 }}
                alt="Testimonial 1"
              />
              <h5 className="mb-0">Client Name</h5>
              <p>Profession</p>
              <div className="testimonial-text bg-light text-center p-4">
                <p className="mb-0">
                  Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit
                  diam amet diam et eos. Clita erat ipsum et lorem et sit.
                </p>
              </div>
            </div>
            <div className="testimonial-item text-center">
              <img
                className="border rounded-circle p-2 mx-auto mb-3"
                src="https://themewagon.github.io/elearning/img/testimonial-2.jpg"
                style={{ width: 80, height: 80 }}
                alt="Testimonial 2"
              />
              <h5 className="mb-0">Client Name</h5>
              <p>Profession</p>
              <div className="testimonial-text bg-light text-center p-4">
                <p className="mb-0">
                  Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit
                  diam amet diam et eos. Clita erat ipsum et lorem et sit.
                </p>
              </div>
            </div>
            <div className="testimonial-item text-center">
              <img
                className="border rounded-circle p-2 mx-auto mb-3"
                src="https://themewagon.github.io/elearning/img/testimonial-2.jpg"
                style={{ width: 80, height: 80 }}
                alt="Testimonial 3"
              />
              <h5 className="mb-0">Client Name</h5>
              <p>Profession</p>
              <div className="testimonial-text bg-light text-center p-4">
                <p className="mb-0">
                  Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit
                  diam amet diam et eos. Clita erat ipsum et lorem et sit.
                </p>
              </div>
            </div>
            <div className="testimonial-item text-center">
              <img
                className="border rounded-circle p-2 mx-auto mb-3"
                src="https://themewagon.github.io/elearning/img/testimonial-2.jpg"
                style={{ width: 80, height: 80 }}
                alt="Testimonial 4"
              />
              <h5 className="mb-0">Client Name</h5>
              <p>Profession</p>
              <div className="testimonial-text bg-light text-center p-4">
                <p className="mb-0">
                  Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit
                  diam amet diam et eos. Clita erat ipsum et lorem et sit.
                </p>
              </div>
            </div>
          </OwlCarousel>
        </div>
      </div>
    </>
  );
}
