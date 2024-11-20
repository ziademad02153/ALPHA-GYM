import React from 'react';
import { ChevronRight } from 'lucide-react';
import HeroButton from './HeroButton';

const Hero = () => {
  return (
    <div className="relative h-screen">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
          className="w-full h-full object-cover"
          alt="Gym background"
        />
        <div className="absolute inset-0 bg-black opacity-60"></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
        <div className="flex flex-col justify-center h-full">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6">
            TRANSFORM YOUR BODY<br />
            <span className="text-red-600">TRANSFORM YOUR LIFE</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl">
            Join ALPHA GYM today and start your fitness journey with state-of-the-art equipment and expert trainers.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <HeroButton primary>
              Start Your Journey <ChevronRight className="h-5 w-5" />
            </HeroButton>
            <HeroButton>View Classes</HeroButton>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;