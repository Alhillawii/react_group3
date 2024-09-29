import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

export default function Hero() {
    return (
        <>
            <div className="container-fluid p-0 mb-5">
                <OwlCarousel className="owl-theme" loop margin={10}  items={1} autoplay autoplayTimeout={3000} autoplayHoverPause>
                    <div className="item">
                        <img
                            className="img-fluid"
                            src="https://scontent.famm13-1.fna.fbcdn.net/v/t39.30808-6/271565606_4637022516425371_7493034584141324062_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=cc71e4&_nc_ohc=FHxJJthXi6QQ7kNvgFDSJS7&_nc_ht=scontent.famm13-1.fna&_nc_gid=AITmgq6-lTYACr0OgOOzJzA&oh=00_AYCbSGk8VFsqODnrc1j-ERpgnaccFoyjA01AYpdPmKxbHA&oe=66FCAAE5"
                            alt="carousel-1"
                        />
                        <div
                            className="position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center"
                            style={{ background: "rgba(24, 29, 56, .7)" }}
                        >
                            <div className="container">
                                <div className="row justify-content-start">
                                    <div className="col-sm-10 col-lg-8">
                                        {/* <h5 className="text-primary text-uppercase mb-3 animated slideInDown">
                      Best Online Courses
                    </h5>
                    <h1 className="display-3 text-white animated slideInDown">
                      The Best Online Learning Platform
                    </h1>
                    <p className="fs-5 text-white mb-4 pb-2">
                      Vero elitr justo clita lorem. Ipsum dolor at sed stet sit diam no. Kasd rebum ipsum et diam justo clita et kasd rebum sea sanctus eirmod elitr.
                    </p> */}
                                        {/* <a
                      href=""
                      className="btn btn-primary py-md-3 px-md-5 me-3 animated slideInLeft"
                    >
                      Read More
                    </a>
                    <a
                      href=""
                      className="btn btn-light py-md-3 px-md-5 animated slideInRight"
                    >
                      Join Now
                    </a> */}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="item">
                        <img
                            className="img-fluid"
                            src="https://scontent.famm13-1.fna.fbcdn.net/v/t39.30808-6/279345753_4962971590497127_8862828753683005444_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=cc71e4&_nc_ohc=6ACA0YNJb8IQ7kNvgFUPJOl&_nc_ht=scontent.famm13-1.fna&oh=00_AYA3YJFK4Bve_a5fYdCtijbhxpRrVdJ_eRNEo-C8-dQ0lw&oe=66FCD842"
                            alt="carousel-2"
                        />
                        <div
                            className="position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center"
                            style={{ background: "rgba(24, 29, 56, .7)" }}
                        >
                            <div className="container">
                                <div className="row justify-content-start">
                                    <div className="col-sm-10 col-lg-8">
                                        {/* <h5 className="text-primary text-uppercase mb-3 animated slideInDown">
                      Best Online Courses
                    </h5>
                    <h1 className="display-3 text-white animated slideInDown">
                      Get Educated Online From Your Home
                    </h1>
                    <p className="fs-5 text-white mb-4 pb-2">
                      Vero elitr justo clita lorem. Ipsum dolor at sed stet sit diam no. Kasd rebum ipsum et diam justo clita et kasd rebum sea sanctus eirmod elitr.
                    </p> */}
                                        {/* <a
                      href=""
                      className="btn btn-primary py-md-3 px-md-5 me-3 animated slideInLeft"
                    >
                      Read More
                    </a>
                    <a
                      href=""
                      className="btn btn-light py-md-3 px-md-5 animated slideInRight"
                    >
                      Join Now
                    </a> */}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </OwlCarousel>
            </div>
        </>
    );
}