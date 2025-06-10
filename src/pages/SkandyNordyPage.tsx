import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { houseData } from '../data/houses';

const SkandyNordyPage: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  
  // Filter only Skandy-Nordy category houses
  const skandyNordyHouses = houseData.filter(house => house.category === 'SKANDY-NORDY');

  const openLightbox = (imageUrl: string) => {
    setSelectedImage(imageUrl);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative h-96 bg-gradient-to-r from-green-700 to-green-900">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative container mx-auto px-4 h-full flex items-center">
          <div className="text-white">
            <h1 className="text-5xl font-light mb-4">Skandy-Nordy Collection</h1>
            <p className="text-xl mb-6 max-w-2xl">
              Scandinavian-Nordic inspired minimalist design. Our Skandy-Nordy series embraces 
              natural materials, clean lines, and sustainable living principles.
            </p>
            <div className="flex items-center space-x-4">
              <span className="bg-white text-green-700 px-4 py-2 font-medium">
                {skandyNordyHouses.length} Models Available
              </span>
              <span className="text-white/80">Starting from £295,000</span>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="text-center">
              <div className="bg-green-700/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-green-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Natural Materials</h3>
              <p className="text-gray-600">Sustainably sourced wood, stone, and eco-friendly materials throughout</p>
            </div>
            <div className="text-center">
              <div className="bg-green-700/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-green-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Minimalist Design</h3>
              <p className="text-gray-600">Clean lines and uncluttered spaces that promote tranquility and focus</p>
            </div>
            <div className="text-center">
              <div className="bg-green-700/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-green-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Sustainable Living</h3>
              <p className="text-gray-600">Environmentally conscious design with minimal ecological footprint</p>
            </div>
          </div>
        </div>
      </section>

      {/* Models Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-light text-gray-800 mb-6">Skandy-Nordy Models</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover our range of Skandy-Nordy models, each embodying the essence of 
              Scandinavian design philosophy and Nordic craftsmanship.
            </p>
          </div>

          {/* Models Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skandyNordyHouses.map((house, index) => {
              const originalIndex = houseData.findIndex(h => h.name === house.name);
              return (
                <div key={index} className="group relative overflow-hidden bg-white shadow-lg hover:shadow-2xl transition-all duration-500">
                  {/* Badge */}
                  <div className="absolute top-4 left-4 z-10 bg-blue-600 text-white py-2 px-4 text-sm font-medium">
                    VAULT STANDARD
                  </div>
                  
                  {/* Skandy-Nordy Badge */}
                  <div className="absolute top-4 right-4 z-10 bg-green-700 text-white py-1 px-3 text-xs font-medium">
                    SKANDY-NORDY
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
                        <span className="font-bold text-green-700 text-lg">£{house.price.toLocaleString()}</span>
                      </div>
                    </div>

                    <div className="border-t pt-4">
                      <div className="flex items-center text-sm text-gray-600 mb-3">
                        <svg className="w-4 h-4 mr-2 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        Eco-Certified Materials
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

      {/* Design Philosophy */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-light text-gray-800 mb-6">Nordic Design Philosophy</h2>
              <p className="text-lg text-gray-600 mb-6">
                Our Skandy-Nordy collection is inspired by the timeless principles of Scandinavian 
                design: functionality, simplicity, and connection with nature.
              </p>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="bg-green-700 text-white w-8 h-8 rounded-full flex items-center justify-center mr-4 mt-1">
                    <span className="text-sm font-bold">1</span>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Hygge Living</h4>
                    <p className="text-gray-600">Creating cozy, comfortable spaces that promote well-being and contentment</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-green-700 text-white w-8 h-8 rounded-full flex items-center justify-center mr-4 mt-1">
                    <span className="text-sm font-bold">2</span>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Lagom Balance</h4>
                    <p className="text-gray-600">Finding the perfect balance - not too little, not too much, just right</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-green-700 text-white w-8 h-8 rounded-full flex items-center justify-center mr-4 mt-1">
                    <span className="text-sm font-bold">3</span>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Natural Harmony</h4>
                    <p className="text-gray-600">Seamless integration with the natural environment and seasonal changes</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <img 
                src="/Nordy-65-3D-2.jpg" 
                alt="Nordic design interior"
                className="w-full h-96 object-cover rounded-lg shadow-lg"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent rounded-lg"></div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-green-700">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-light text-white mb-6">Embrace Nordic Living</h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Experience the tranquility and sustainability of Scandinavian design with our 
            carefully crafted Skandy-Nordy collection.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-green-700 px-8 py-3 font-medium hover:bg-gray-100 transition-colors duration-200">
              Schedule Visit
            </button>
            <Link 
              to="/gallery"
              className="border border-white text-white px-8 py-3 font-medium hover:bg-white hover:text-green-700 transition-colors duration-200"
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
              alt="Skandy-Nordy house design"
              className="max-w-full max-h-full object-contain"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default SkandyNordyPage;