import React from 'react';
import Hero from './Hero';
import Flights from '../pages/Flights';
import Visa from '../pages/Visa';
import Packages from '../pages/Packages';
import AboutUs from '../pages/AboutUs';
import ContactUs from '../pages/ContactUs';
import Footer from './Footer';

const Home = () => {
  return ( 
    <>
    <Hero></Hero>
    <Flights></Flights>
    <Visa></Visa>
    <Packages></Packages>
    <AboutUs></AboutUs>
    <ContactUs></ContactUs>
    <Footer></Footer>
    </>
  )
}

export default Home
