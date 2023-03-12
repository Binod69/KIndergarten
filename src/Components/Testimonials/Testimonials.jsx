import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-cards';
import { AiOutlinePlayCircle } from 'react-icons/ai';

import { Autoplay, Pagination, Navigation } from 'swiper';
const Testimonials = () => {
  return (
    <>
      <div className="py-5 testimonials">
        <div className="row container-fluid">
          <div className="col-lg-12">
            <figure className="fish1 d-lg-block d-none">
              <img className="fish1" src="/assets/fish1.png" alt="fish1.png" />
            </figure>
          </div>
        </div>
        <div className="container testimonials">
          <div className="row">
            <div className="col-lg-6 ">
              <article className="py-lg-5 heading-con">
                <h5>Testimonials</h5>
                <h3 className="heading">
                  Just watch what <span className="heading-span">Parents</span>{' '}
                  say.
                </h3>
                <p className="">
                  Rapidiously conceptualize inexpensive value through
                  functionalized markets. Enthusiastically integrate distinctive
                  web services vis-a-vis end-to-end ROI. Assertively fashion
                  best-of-breed products.
                </p>
              </article>
              <button type="button" className="btn btn-outline-secondary">
                View Full Testimonials
              </button>
            </div>
            <div className="col-lg-6 tv">
              <figure className="tv">
                <img
                  className="w-100"
                  src="/assets/kindergarten-tv.svg"
                  alt=""
                />
              </figure>
              <div className="swipers">
                <Swiper
                  spaceBetween={30}
                  centeredSlides={true}
                  autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                  }}
                  pagination={{
                    clickable: true,
                  }}
                  navigation={true}
                  modules={[Autoplay, Pagination, Navigation]}
                  className="mySwiper"
                >
                  <SwiperSlide>
                    <img
                      className="swiperImg"
                      src="/assets/testi1.avif"
                      alt=""
                    />
                    <AiOutlinePlayCircle className="play" size={50} />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img
                      className="swiperImg"
                      src="/assets/testi1.avif"
                      alt=""
                    />
                    <AiOutlinePlayCircle className="play" size={50} />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img
                      className="swiperImg"
                      src="/assets/testi1.avif"
                      alt=""
                    />
                    <AiOutlinePlayCircle className="play" size={50} />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img
                      className="swiperImg"
                      src="/assets/testi1.avif"
                      alt=""
                    />
                    <AiOutlinePlayCircle className="play" size={50} />
                  </SwiperSlide>
                </Swiper>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Testimonials;
