import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { houseData } from '../data/houses';

const SmartPage: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  
  // Filter only Smart category houses
  const smartHouses = houseData.filter(house => house.category === 'SMART');

  const openLightbox = (imageUrl: string) => {
    setSelectedImage(imageUrl);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative h-96 bg-gradient-to-r from-blue-600 to-blue-800">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative container mx-auto px-4 h-full flex items-center">
          <div className="text-white">
            <h1 className="text-5xl font-light mb-4">Smart Collection</h1>
            <p className="text-xl mb-6 max-w-2xl">
              Intelligent home automation and energy efficiency. Our Smart series integrates 
              cutting-edge technology with sustainable design for the future of living.
            </p>
            <div className="flex items-center space-x-4">
              <span className="bg-white text-blue-600 px-4 py-2 font-medium">
                {smartHouses.length} Models Available
              </span>
              <span className="text-white/80">Starting from £320,000</span>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="text-center">
              <div className="bg-blue-600/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Smart Home Technology</h3>
              <p className="text-gray-600">Integrated automation systems for lighting, climate, security, and entertainment</p>
            </div>
            <div className="text-center">
              <div className="bg-blue-600/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Energy Optimization</h3>
              <p className="text-gray-600">AI-powered energy management systems that learn and adapt to your lifestyle</p>
            </div>
            <div className="text-center">
              <div className="bg-blue-600/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Remote Control</h3>
              <p className="text-gray-600">Complete home control from anywhere with our dedicated mobile app</p>
            </div>
          </div>
        </div>
      </section>

      {/* Models Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-light text-gray-800 mb-6">Smart Models</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover our range of Smart models, each equipped with the latest home automation 
              technology and energy-efficient systems.
            </p>
          </div>

          {/* Models Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {smartHouses.map((house, index) => {
              const originalIndex = houseData.findIndex(h => h.name === house.name);
              return (
                <div key={index} className="group relative overflow-hidden bg-white shadow-lg hover:shadow-2xl transition-all duration-500">
                  {/* Badge */}
                  <div className="absolute top-4 left-4 z-10 bg-blue-600 text-white py-2 px-4 text-sm font-medium">
                    VAULT STANDARD
                  </div>
                  
                  {/* Smart Badge */}
                  <div className="absolute top-4 right-4 z-10 bg-blue-600 text-white py-1 px-3 text-xs font-medium">
                    SMART
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
                        <span className="font-bold text-blue-600 text-lg">£{house.price.toLocaleString()}</span>
                      </div>
                    </div>

                    <div className="border-t pt-4">
                      <div className="flex items-center text-sm text-gray-600 mb-3">
                        <svg className="w-4 h-4 mr-2 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        Smart Home Ready
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

      {/* Technology Features */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-light text-gray-800 mb-6">Smart Technology Features</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-blue-600 text-white w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h4 className="font-semibold mb-2">Smart Lighting</h4>
              <p className="text-sm text-gray-600">Automated lighting systems with mood and schedule controls</p>
            </div>
            
            <div className="text-center">
              <div className="bg-blue-600 text-white w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
                </svg>
              </div>
              <h4 className="font-semibold mb-2">Climate Control</h4>
              <p className="text-sm text-gray-600">AI-powered HVAC systems for optimal comfort and efficiency</p>
            </div>
            
            <div className="text-center">
              <div className="bg-blue-600 text-white w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <h4 className="font-semibold mb-2">Security System</h4>
              <p className="text-sm text-gray-600">Advanced security with smart locks and surveillance integration</p>
            </div>
            
            <div className="text-center">
              <div className="bg-blue-600 text-white w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h4 className="font-semibold mb-2">Energy Management</h4>
              <p className="text-sm text-gray-600">Real-time energy monitoring and optimization systems</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-light text-white mb-6">Ready for the Future of Living?</h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Experience the convenience and efficiency of smart home technology with our 
            intelligent prefab designs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-600 px-8 py-3 font-medium hover:bg-gray-100 transition-colors duration-200">
              Schedule Demo
            </button>
            <Link 
              to="/gallery"
              className="border border-white text-white px-8 py-3 font-medium hover:bg-white hover:text-blue-600 transition-colors duration-200"
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
              alt="Smart house design"
              className="max-w-full max-h-full object-contain"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default SmartPage;