import React from 'react';
import './App.css';
import Cards from './Cards';
import HeroSection from './HeroSection';
import About from './About';
import Footer from './Footer';

function Home() {
  return (
    <>
      <HeroSection />
      <About />
      <Cards />
      <Footer/>
    </>
  );
}

export default Home;