import React from 'react';

const ReadyToStartSection: React.FC = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-primary to-primary-dark">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <h2 className="text-4xl md:text-5xl font-light text-white mb-6 leading-tight">
            Ready to Start Your Journey?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed">
            Transform your vision into reality with our expert team. From initial consultation 
            to final assembly, we're here to guide you every step of the way.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-2">3-5</div>
              <div className="text-white/80">Days Assembly</div>
            </div>
            <div className="hidden sm:block w-px h-12 bg-white/30"></div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-2">10</div>
              <div className="text-white/80">Year Warranty</div>
            </div>
            <div className="hidden sm:block w-px h-12 bg-white/30"></div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-2">A+++</div>
              <div className="text-white/80">Energy Rating</div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-primary px-8 py-4 font-semibold hover:bg-gray-100 transition-colors duration-200 rounded-sm text-lg">
              Schedule Consultation
            </button>
            <button className="border-2 border-white text-white px-8 py-4 font-semibold hover:bg-white hover:text-primary transition-colors duration-200 rounded-sm text-lg">
              Download Brochure
            </button>
          </div>

          <div className="mt-8 text-white/70 text-sm">
            Free consultation • No obligation • Expert guidance
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReadyToStartSection;