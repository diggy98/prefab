import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { houseData, getCategories, getHousesByCategory } from '../data/houses';

const HouseDesigns: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>('ALL');
  const categories = getCategories();
  const filteredHouses = getHousesByCategory(activeTab);

  return (
    <section id="designs" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="mb-16">
          <div className="text-primary text-sm uppercase tracking-wider mb-4">PREFAB HOMES</div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-end">
            <div>
              <h2 className="text-4xl md:text-5xl font-light text-white mb-6 leading-tight">
                Create functional and stylish 
                <span className="relative">
                  modern buildings for you.
                  <div className="absolute -bottom-2 left-0 w-8 h-8 border-2 border-primary rounded-sm"></div>
                </span>
              </h2>
            </div>
            <div>
              <p className="text-gray-400 text-lg leading-relaxed">
                Our buildings combine minimalism and elegance of lines and shapes. 
                We want them to be an integral part of the surrounding landscape.
              </p>
            </div>
          </div>
        </div>
        
        {/* Tabs */}
        <div className="flex flex-wrap gap-2 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              className={`py-3 px-6 font-medium transition-all duration-300 ${
                activeTab === category 
                  ? 'bg-primary text-gray-900' 
                  : 'bg-transparent text-gray-400 border border-gray-700 hover:border-gray-500 hover:text-white'
              }`}
              onClick={() => setActiveTab(category)}
            >
              {category}
            </button>
          ))}
          <Link 
            to="/gallery" 
            className="py-3 px-6 font-medium border border-gray-700 text-gray-400 hover:border-gray-500 hover:text-white transition-all duration-300 flex items-center"
          >
            SHOW MORE DESIGNS →
          </Link>
        </div>
        
        {/* House Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredHouses.slice(0, 6).map((house, index) => {
            const originalIndex = houseData.findIndex(h => h.name === house.name);
            return (
              <Link key={index} to={`/house/${originalIndex}`} className="group cursor-pointer">
                <div className="relative overflow-hidden bg-gray-800 transition-all duration-500 hover:bg-gray-750">
                  {/* Image Container */}
                  <div className="relative overflow-hidden h-80">
                    <img 
                      src={house.imageUrl} 
                      alt={house.name} 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-500"></div>
                    
                    {/* Category Badge */}
                    <div className="absolute top-6 left-6">
                      <div className="w-12 h-12 border-2 border-white rounded-sm flex items-center justify-center">
                        <div className="w-6 h-6 border border-white rounded-sm"></div>
                      </div>
                    </div>
                    
                    {/* Hover Content */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500">
                      <div className="text-center">
                        <div className="text-white text-sm uppercase tracking-wider mb-2">< EXPLORE ></div>
                        <div className="text-white font-light text-lg">{house.category}</div>
                        <div className="text-gray-300 text-sm mt-2">
                          {house.squareFeet} ft² • £{house.price.toLocaleString()}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-8">
                    <h3 className="text-white text-2xl font-light mb-3 group-hover:text-primary transition-colors duration-300">
                      {house.name}
                    </h3>
                    
                    {house.description && (
                      <p className="text-gray-400 text-sm leading-relaxed mb-4">
                        {house.description}
                      </p>
                    )}
                    
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-500">
                        {house.squareMeters} m² • {house.type}
                      </span>
                      <span className="text-primary font-medium">
                        £{house.price.toLocaleString()}
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <Link 
            to="/gallery"
            className="inline-flex items-center text-white hover:text-primary transition-colors duration-300 text-lg"
          >
            View All Designs
            <svg className="w-5 h-5 ml-2 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HouseDesigns;