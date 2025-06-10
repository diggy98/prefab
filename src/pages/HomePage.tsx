import React from 'react';
import Hero from '../components/Hero';
import HouseTypes from '../components/HouseTypes';
import HouseDesigns from '../components/HouseDesigns';
import TurnKey from '../components/TurnKey';
import Interiors from '../components/Interiors';

const HomePage: React.FC = () => {
  return (
    <>
      <Hero />
      <HouseTypes />
      <HouseDesigns />
      <TurnKey />
      <Interiors />
    </>
  );
};

export default HomePage;