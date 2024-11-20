import React from 'react';
import { ChevronRight } from 'lucide-react';

const CallToAction = () => {
  return (
    <div className="relative py-24">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1549060279-7e168fcee0c2?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
          className="w-full h-full object-cover"
          alt="Gym motivation"
        />
        <div className="absolute inset-0 bg-black opacity-75"></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Start Your Transformation?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Join now and get 50% off your first month! Limited time offer.
          </p>
          <button className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-lg text-lg font-semibold flex items-center justify-center gap-2 mx-auto transition duration-300">
            Get Started Today <ChevronRight className="h-5 w-5" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CallToAction;