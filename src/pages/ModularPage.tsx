import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { houseData } from '../data/houses';

const ModularPage: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  
  // Filter only Modular category houses
  const modularHouses = houseData.filter(house => house.category === 'MODULAR');

  const openLightbox = (imageUrl: string) => {
    setSelectedImage(imageUrl);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative h-96 bg-gradient-to-r from-orange-600 to-orange-800">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative container mx-auto px-4 h-full flex items-center">
          <div className="text-white">
            <h1 className="text-5xl font-light mb-4">Modular Collection</h1>
            <p className="text-xl mb-6 max-w-2xl">
              Flexible modular construction for customizable living. Our Modular series offers 
              adaptable layouts and expandable designs to grow with your needs.
            </p>
            <div className="flex items-center space-x-4">
              <span className="bg-white text-orange-600 px-4 py-2 font-medium">
                {modularHouses.length} Models Available
              </span>
              <span className="text-white/80">Starting from £275,000</span>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="text-center">
              <div className="bg-orange-600/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Flexible Layout</h3>
              <p className="text-gray-600">Adaptable room configurations that can be modified over time</p>
            </div>
            <div className="text-center">
              <div className="bg-orange-600/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Modular Design</h3>
              <p className="text-gray-600">Expandable system allowing for future additions and modifications</p>
            </div>
            <div className="text-center">
              <div className="bg-orange-600/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Customizable</h3>
              <p className="text-gray-600">Personalize your home with various configuration options</p>
            </div>
          </div>
        </div>
      </section>

      {/* Models Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-light text-gray-800 mb-6">Modular Models</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover our Modular collection, featuring flexible designs that adapt 
              to your changing lifestyle needs.
            </p>
          </div>

          {/* Models Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {modularHouses.map((house, index) => {
              const originalIndex = houseData.findIndex(h => h.name === house.name);
              return (
                <div key={index} className="group relative overflow-hidden bg-white shadow-lg hover:shadow-2xl transition-all duration-500">
                  {/* Badge */}
                  <div className="absolute top-4 left-4 z-10 bg-blue-600 text-white py-2 px-4 text-sm font-medium">
                    VAULT STANDARD
                  </div>
                  
                  {/* Modular Badge */}
                  <div className="absolute top-4 right-4 z-10 bg-orange-600 text-white py-1 px-3 text-xs font-medium">
                    MODULAR
                  </div>
                  
                  {/* Image */}
                  <div className="relative overflow-hidden h-80">
                    <img 
                      src={house.imageUrl} 
                      alt={house.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 cursor-pointer"
                      onClick={() => openLightbox(house.imageUrl)}
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300"></div>
                    
                    {/* Overlay Info */}
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                      <h3 className="text-xl font-semibold mb-2">{house.name}</h3>
                      <p className="text-sm opacity-90">Click to view full size</p>
                    </div>
                  </div>

                  {/* House Details */}
                  <div className="p-6">
                    <h3 className="text-2xl font-medium text-gray-800 mb-3">{house.name}</h3>
                    
                    {house.description && (
                      <p className="text-gray-600 mb-3">{house.description}</p>
                    )}
                    
                    <div className="space-y-2 mb-4">
                      <div className="flex items-center justify-between">
                        <span className="text-gray-600">Area:</span>
                        <span className="font-medium">{house.squareFeet} ft² ({house.squareMeters} m²)</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-gray-600">Type:</span>
                        <span className="font-medium">{house.type}</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-gray-600">Price:</span>
                        <span className="font-bold text-orange-600 text-lg">£{house.price.toLocaleString()}</span>
                      </div>
                    </div>

                    <div className="border-t pt-4">
                      <div className="flex items-center text-sm text-gray-600 mb-3">
                        <svg className="w-4 h-4 mr-2 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        Expandable Design
                      </div>
                      
                      <Link 
                        to={`/house/${originalIndex}`}
                        className="block w-full bg-gray-900 text-white py-3 px-4 font-medium hover:bg-gray-800 transition-colors duration-200 text-center"
                      >
                        View Details &rarr;
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Modular Benefits */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-light text-gray-800 mb-6">Why Choose Modular?</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-orange-600 text-white w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4" />
                </svg>
              </div>
              <h4 className="font-semibold mb-2">Future Expansion</h4>
              <p className="text-sm text-gray-600">Add rooms or levels as your family grows</p>
            </div>
            
            <div className="text-center">
              <div className="bg-orange-600 text-white w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                </svg>
              </div>
              <h4 className="font-semibold mb-2">Cost Effective</h4>
              <p className="text-sm text-gray-600">Start smaller and expand when budget allows</p>
            </div>
            
            <div className="text-center">
              <div className="bg-orange-600 text-white w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                </svg>
              </div>
              <h4 className="font-semibold mb-2">Adaptable</h4>
              <p className="text-sm text-gray-600">Reconfigure spaces for changing needs</p>
            </div>
            
            <div className="text-center">
              <div className="bg-orange-600 text-white w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h4 className="font-semibold mb-2">Quick Assembly</h4>
              <p className="text-sm text-gray-600">Faster construction with modular components</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-orange-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-light text-white mb-6">Build Your Future, One Module at a Time</h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Start with what you need today and expand tomorrow with our flexible 
            modular construction system.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-orange-600 px-8 py-3 font-medium hover:bg-gray-100 transition-colors duration-200">
              Plan Your Modules
            </button>
            <Link 
              to="/gallery"
              className="border border-white text-white px-8 py-3 font-medium hover:bg-white hover:text-orange-600 transition-colors duration-200"
            >
              View All Models
            </Link>
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4"
          onClick={closeLightbox}
        >
          <div className="relative max-w-4xl max-h-full">
            <button
              onClick={closeLightbox}
              className="absolute top-4 right-4 text-white text-4xl hover:text-gray-300 transition-colors z-10"
            >
              &times;
            </button>
            <img 
              src={selectedImage} 
              alt="Modular house design"
              className="max-w-full max-h-full object-contain"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default ModularPage;