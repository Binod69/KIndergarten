import React from 'react';

import service from './serviceData';
const Services = () => {
  return (
    <>
      <div className="container py-5 overflow-hidden">
        <h2 className="service-heading">What services we provide:</h2>
        <div className="row">
          <div className="col-lg-8">
            <div className="row py-5 ">
              {service.map((item) => (
                <div key={item.id} className="col-lg-6  ">
                  <div className="d-flex align-items-lg-center">
                    <div className="icons">
                      <img className="w-50" src={item.icon} alt={item.icon} />
                    </div>
                    <article>
                      <h3>{item.title}</h3>
                      <p>{item.para}</p>
                    </article>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="col-lg-4 service-con">
            <img
              className="w-100 service-img"
              src="/assets/card-img.png"
              alt="card-img.png"
            />
            <h3 className="right-heading">How we care for your child?</h3>
            <p className="right-para">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus
              mollitia nemo
            </p>
            <div className="img-background" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
