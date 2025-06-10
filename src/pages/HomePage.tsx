import React from 'react';
import Hero from '../components/Hero';
import HouseTypes from '../components/HouseTypes';
import HouseDesigns from '../components/HouseDesigns';
import TurnKey from '../components/TurnKey';
import ProcessSection from '../components/ProcessSection';

const HomePage: React.FC = () => {
  return (
    <>
      <Hero />
      <HouseTypes />
      <HouseDesigns />
      <TurnKey />
      <ProcessSection />
    </>
  );
};

export default HomePage;