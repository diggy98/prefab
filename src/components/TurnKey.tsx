import React from 'react';

const TurnKey: React.FC = () => {
  return (
    <section id="turnkey" className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-8 md:mb-0 md:pr-12">
            <h2 className="text-4xl font-light text-gray-800 mb-6">Turn-key Finish</h2>
            <p className="text-lg text-gray-700 mb-8">
              Superior craftsmanship, no compromises.
            </p>
            <a 
              href="#finish-options" 
              className="inline-flex items-center text-primary font-medium hover:underline"
            >
              View Finish Options &rarr;
            </a>
          </div>
          <div className="md:w-1/2">
            <div className="bg-white p-8 shadow-md">
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="text-primary mr-2">&check;</span>
                  <span>Factory-built to exceed UK energy standards</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">&check;</span>
                  <span>Assembled on-site in 3-5 days</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">&check;</span>
                  <span>Premium materials with 10-year structural warranty</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">&check;</span>
                  <span>Complete thermodynamic analysis for each design</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">&check;</span>
                  <span>Integrated smart home systems</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TurnKey;