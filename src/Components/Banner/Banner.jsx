import React from 'react';
import Navbar from '../Navbar/Navbar';
import { AiOutlineArrowRight } from 'react-icons/ai';
import { MdSlowMotionVideo } from 'react-icons/md';

const Banner = () => {
  return (
    <>
      <div className="back">
        <div className="container">
          <Navbar />

          <div className="row">
            <div className="col-lg-8 order-lg-1">
              <p className=" pt-5 para1">A SECOND HOME FOR YOUR KID</p>
              <h1 className=" heading">
                Play, Learn and Grow
                <span className="heading-span">Together..</span>
              </h1>
              <p className="para2  py-4">
                Rapidiously conceptualize inexpensive value through
                functionalized markets. Enthusiastically integrate distinctive
                web services vis-a-vis end-to-end ROI. Assertively fashion
                best-of-breed products.
              </p>
            </div>
            <div className="col-lg-4 order-lg-2">
              <img className="w-100" src="/assets/banner.png" alt="" />
            </div>
          </div>
          <div className="banner-btn  py-3 order-1">
            <button className="btn btn-enroll p-3 ">
              Enroll Now <AiOutlineArrowRight />
            </button>
            <button
              type="button"
              className="btn btn-light p-3 ms-3"
              data-bs-toggle="modal"
              data-bs-target="#exampleModal"
            >
              <MdSlowMotionVideo /> Watch Video
            </button>
          </div>
        </div>
        <div className="fish d-lg-block d-none">
          <img className="w-25" src="/assets/fish2.png" alt="" />
        </div>
      </div>
    </>
  );
};

export default Banner;
