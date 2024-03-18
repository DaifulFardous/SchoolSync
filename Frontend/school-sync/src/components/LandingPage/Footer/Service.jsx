import React from 'react';

const Service = () => {
  return (
    <div className="container-xxl py-5">
      <div className="container">
        <h1 className="text-3xl font-bold text-center mb-8">Why choose us</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="wow fadeInUp" data-wow-delay="0.1s">
            <div className="service-item text-center pt-3 bg-white/90 transition-all duration-500 hover:bg-sky-600">
              <div className="p-4">
                <i className="fa fa-3x fa-graduation-cap text-primary mb-4"></i>
                <h5 className="mb-3">Skilled Instructors</h5>
                <p>Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam</p>
              </div>
            </div>
          </div>
          <div className="wow fadeInUp" data-wow-delay="0.3s">
            <div className="service-item text-center pt-3 bg-white/90 transition-all duration-500 hover:bg-sky-600">
              <div className="p-4">
                <i className="fa fa-3x fa-globe text-primary mb-4"></i>
                <h5 className="mb-3">Online Classes</h5>
                <p>Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam</p>
              </div>
            </div>
          </div>
          <div className="wow fadeInUp" data-wow-delay="0.5s">
            <div className="service-item text-center pt-3 bg-white/90 transition-all duration-500 hover:bg-sky-600">
              <div className="p-4">
                <i className="fa fa-3x fa-home text-primary mb-4"></i>
                <h5 className="mb-3">Home Projects</h5>
                <p>Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam</p>
              </div>
            </div>
          </div>
          <div className="wow fadeInUp" data-wow-delay="0.7s">
            <div className="service-item text-center pt-3 bg-white/90 transition-all duration-500 hover:bg-sky-600">
              <div className="p-4">
                <i className="fa fa-3x fa-book-open text-primary mb-4"></i>
                <h5 className="mb-3">Book Library</h5>
                <p>Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;