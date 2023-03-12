import React from 'react';
import Banner from '../Components/Banner/Banner';
import Services from '../Components/servic/Services';
import Ta from '../Components/Tab/Tabs';
import Testimonials from '../Components/Testimonials/Testimonials';
import Footer from '../Components/Footer/Footer';
import Visit from '../Components/Visit/Visit';

const Home = () => {
  return (
    <>
      <Banner />
      <Services />
      <Ta />
      <Testimonials />
      <Visit />
      <Footer />
    </>
  );
};

export default Home;
