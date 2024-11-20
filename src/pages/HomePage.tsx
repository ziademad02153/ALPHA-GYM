import React from 'react';
import Hero from '../components/home/Hero';
import Features from '../components/features/Features';
import Classes from '../components/classes/Classes';
import CallToAction from '../components/cta/CallToAction';

const HomePage = () => {
  return (
    <>
      <Hero />
      <Features />
      <Classes />
      <CallToAction />
    </>
  );
};

export default HomePage;