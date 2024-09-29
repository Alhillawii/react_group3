import React from 'react';

const Amenities= () => {
  return (
    <section className="py-5 bg-light">
      <div className="container">
        <h2 className="text-center mb-4   text-primary ">Our Facilities</h2>
        <p className="text-center mb-5" style={{ fontSize: '1.5rem' }}>
  At Alithad School, we provide a range of top-notch facilities to support student learning and development.
</p>
        
        <div className="row">
          {/* Facility 1 */}
          <div className="col-md-4 mb-4">
            <div className="card h-100 shadow-sm">
              <img 
                src="https://www.jks.edu.sa/wp-content/uploads/2023/10/Comp_Lab2_1-scaled.jpg" 
                className="card-img-top" 
                alt="School Library" 
              />
              <div className="card-body">
                <h5 className="card-title section-title bg-white text-start text-primary pe-3">Computer lab</h5>
                <p className="card-text">
                A modern computer lab equipped with the latest technology and software to enhance digital literacy and innovation.
                </p>
                
              </div>
            </div>
          </div>
          
          {/* Facility 2 */}
          <div className="col-md-4 mb-4">
            <div className="card h-100 shadow-sm">
              <img 
                src="https://www.ittihad.edu.jo/wp-content/uploads/2023/02/5B-scaled.jpg" 
                className="card-img-top" 
                alt="Sports Complex" 
              />
              <div className="card-body">
                <h5 className="card-title section-title bg-white text-start text-primary pe-3">Sports Complex</h5>
                <p className="card-text">
                  Our state-of-the-art sports complex includes fields and courts for various sports, encouraging physical activity and teamwork.
                </p>
              </div>
            </div>
          </div>
          
          {/* Facility 3 */}
          <div className="col-md-4 mb-4">
            <div className="card h-100 shadow-sm">
              <img 
                src="https://www.jks.edu.sa/wp-content/uploads/2023/10/Lab_3-scaled.jpg" 
                className="card-img-top" 
                alt="Science Lab" 
              />
              <div className="card-body">
                <h5 className="card-title section-title bg-white text-start text-primary pe-3">Advanced Science Labs</h5>
                <p className="card-text">
                  Our fully equipped science labs provide hands-on learning experiences in physics, chemistry, and biology.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Amenities;
