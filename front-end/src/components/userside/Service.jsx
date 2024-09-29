import React from 'react'

export default function Service() {
    return (
        <>
            {/* Service Start */}
            <div className="container-xxl py-5">
                <div className="container">
                    <div className="row g-4">
                        <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.1s">
                            <div className="service-item text-center pt-3">
                                <div className="p-4">
                                    <i className="fa fa-3x fa-graduation-cap text-primary mb-4" />
                                    <h5 className="mb-3">Event Management</h5>
                                    <p>
                                        Tools to plan, organize, and communicate school events, making it easier for the school community to participate.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.3s">
                            <div className="service-item text-center pt-3">
                                <div className="p-4">
                                    <i className="fa fa-3x fa-globe text-primary mb-4" />
                                    <h5 className="mb-3">Attendance Tracking</h5>
                                    <p>
                                        Automated attendance management system to track student presence, ensuring accurate records and easy access.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.5s">
                            <div className="service-item text-center pt-3">
                                <div className="p-4">
                                    <i className="fa fa-3x fa-home text-primary mb-4" />
                                    <h5 className="mb-3">Grade Management</h5>
                                    <p>
                                        Comprehensive grade management system that allows teachers to input, track, and report student performance efficiently.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.7s">
                            <div className="service-item text-center pt-3">
                                <div className="p-4">
                                    <i className="fa fa-3x fa-book-open text-primary mb-4" />
                                    <h5 className="mb-3">Parent Communication</h5>
                                    <p>
                                        A dedicated platform for parents to receive updates, messages, and announcements, fostering stronger home-school connections.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Service End */}
        </>

    )
}