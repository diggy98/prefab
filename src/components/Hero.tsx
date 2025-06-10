import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative h-screen pt-16">
      <div className="absolute inset-0 bg-black/30 z-10"></div>
      
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ 
          backgroundImage: "url('/Skandy 120 front-1 2.png')" 
        }}
      ></div>
      
      <div className="absolute inset-0 flex items-center justify-start z-20">
        <div className="container mx-auto px-4">
          <div className="max-w-xl">
            <p className="text-white text-sm uppercase tracking-wider mb-2">FROM PREFAB HOMES</p>
            <h1 className="text-4xl md:text-5xl text-white font-light mb-4">
              Engineered for Efficiency. Built in Days.
            </h1>
            <p className="text-white text-xl mb-6">
              High-performance prefab homes with precision craftsmanship.
            </p>
            <a 
              href="#designs" 
              className="inline-block bg-primary hover:bg-primary-hover text-white px-8 py-3 font-medium transition-colors duration-200"
            >
              Explore Designs &rarr;
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;