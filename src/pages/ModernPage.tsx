import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { houseData } from '../data/houses';

const ModernPage: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  
  // Filter only Modern category houses
  const modernHouses = houseData.filter(house => house.category === 'MODERN');

  const openLightbox = (imageUrl: string) => {
    setSelectedImage(imageUrl);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative h-96 bg-gradient-to-r from-gray-700 to-gray-900">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative container mx-auto px-4 h-full flex items-center">
          <div className="text-white">
            <h1 className="text-5xl font-light mb-4">Modern Collection</h1>
            <p className="text-xl mb-6 max-w-2xl">
              Sleek modern design with cutting-edge features. Our Modern series represents 
              the pinnacle of contemporary architecture and sophisticated living.
            </p>
            <div className="flex items-center space-x-4">
              <span className="bg-white text-gray-700 px-4 py-2 font-medium">
                {modernHouses.length} Models Available
              </span>
              <span className="text-white/80">Starting from £315,000</span>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="text-center">
              <div className="bg-gray-700/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Sleek Design</h3>
              <p className="text-gray-600">Clean lines and sophisticated aesthetics for contemporary living</p>
            </div>
            <div className="text-center">
              <div className="bg-gray-700/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Modern Amenities</h3>
              <p className="text-gray-600">State-of-the-art features and luxury finishes throughout</p>
            </div>
            <div className="text-center">
              <div className="bg-gray-700/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Premium Materials</h3>
              <p className="text-gray-600">High-quality materials and finishes for lasting elegance</p>
            </div>
          </div>
        </div>
      </section>

      {/* Models Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-light text-gray-800 mb-6">Modern Models</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover our Modern collection, featuring sleek contemporary designs 
              and sophisticated architectural solutions.
            </p>
          </div>

          {/* Models Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {modernHouses.map((house, index) => {
              const originalIndex = houseData.findIndex(h => h.name === house.name);
              return (
                <div key={index} className="group relative overflow-hidden bg-white shadow-lg hover:shadow-2xl transition-all duration-500">
                  {/* Badge */}
                  <div className="absolute top-4 left-4 z-10 bg-blue-600 text-white py-2 px-4 text-sm font-medium">
                    VAULT STANDARD
                  </div>
                  
                  {/* Modern Badge */}
                  <div className="absolute top-4 right-4 z-10 bg-gray-700 text-white py-1 px-3 text-xs font-medium">
                    MODERN
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
                        <span className="font-bold text-gray-700 text-lg">£{house.price.toLocaleString()}</span>
                      </div>
                    </div>

                    <div className="border-t pt-4">
                      <div className="flex items-center text-sm text-gray-600 mb-3">
                        <svg className="w-4 h-4 mr-2 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        Premium Modern Design
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

      {/* CTA Section */}
      <section className="py-20 bg-gray-700">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-light text-white mb-6">Experience Modern Luxury</h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Discover the perfect blend of contemporary design and sophisticated living 
            with our Modern collection.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-gray-700 px-8 py-3 font-medium hover:bg-gray-100 transition-colors duration-200">
              Schedule Viewing
            </button>
            <Link 
              to="/gallery"
              className="border border-white text-white px-8 py-3 font-medium hover:bg-white hover:text-gray-700 transition-colors duration-200"
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
              alt="Modern house design"
              className="max-w-full max-h-full object-contain"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default ModernPage;