import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { houseData, getCategories, getHousesByCategory } from '../data/houses';

const HouseDesigns: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>('ALL');
  const categories = getCategories();
  const filteredHouses = getHousesByCategory(activeTab);

  return (
    <section id="designs" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-light text-gray-800 mb-12">Our house designs</h2>
        
        {/* Tabs */}
        <div className="flex flex-wrap mb-12 border-b">
          {categories.map((category) => (
            <button
              key={category}
              className={`py-3 px-6 font-medium transition-colors duration-200 ${
                activeTab === category 
                  ? 'bg-gray-900 text-white' 
                  : 'bg-white text-gray-800 border border-gray-200 hover:bg-gray-50'
              }`}
              onClick={() => setActiveTab(category)}
            >
              {category}
            </button>
          ))}
          <Link 
            to="/gallery" 
            className="py-3 px-6 font-medium border border-gray-200 text-gray-800 flex items-center hover:text-primary transition-colors"
          >
            SHOW MORE HOUSE DESIGNS &rarr;
          </Link>
        </div>
        
        {/* House Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredHouses.slice(0, 6).map((house, index) => {
            const originalIndex = houseData.findIndex(h => h.name === house.name);
            return (
              <Link key={index} to={`/house/${originalIndex}`} className="relative group">
                <div className="absolute top-4 left-0 z-10 bg-blue-600 text-white py-1 px-4 text-sm">
                  <span>VAULT STANDARD</span>
                </div>
                <div className="overflow-hidden">
                  <img 
                    src={house.imageUrl} 
                    alt={house.name} 
                    className="w-full h-72 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="mt-4">
                  <div className="mb-2">
                    <span className="inline-block bg-primary text-white text-xs px-2 py-1 font-medium">
                      {house.category}
                    </span>
                  </div>
                  <h3 className="text-2xl font-medium text-gray-800">{house.name}</h3>
                  <div className="mt-2 flex items-center">
                    <span className="text-sm text-gray-600">
                      {house.squareFeet} ft² ({house.squareMeters} m²)
                    </span>
                    <span className="mx-2 text-gray-400">|</span>
                    <span className="text-sm text-gray-600">
                      Passive House Certified
                    </span>
                  </div>
                  <div className="mt-1">
                    <span className="text-sm text-gray-800">
                      Price: <span className="text-primary font-medium">£{house.price.toLocaleString()}</span>
                    </span>
                  </div>
                  {house.description && (
                    <p className="text-sm text-gray-600 mt-2">{house.description}</p>
                  )}
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default HouseDesigns;