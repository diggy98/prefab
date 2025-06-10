import React from 'react';
import Hero from '../components/Hero';
import HouseTypes from '../components/HouseTypes';
import HouseDesigns from '../components/HouseDesigns';
import TurnKey from '../components/TurnKey';
import ProcessSection from '../components/ProcessSection';
import Interiors from '../components/Interiors';

const HomePage: React.FC = () => {
  return (
    <>
      <Hero />
      <HouseTypes />
      <HouseDesigns />
      <TurnKey />
      <ProcessSection />
      <Interiors />
    </>
  );
};

export default HomePage;