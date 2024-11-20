import React from 'react';
import { Dumbbell, Clock, MapPin, Users } from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: <Dumbbell className="h-8 w-8 text-red-600" />,
      title: "Latest Equipment",
      description: "State-of-the-art fitness equipment for all your training needs"
    },
    {
      icon: <Clock className="h-8 w-8 text-red-600" />,
      title: "24/7 Access",
      description: "Train any time with our round-the-clock facility access"
    },
    {
      icon: <Users className="h-8 w-8 text-red-600" />,
      title: "Expert Trainers",
      description: "Professional trainers to guide you through your fitness journey"
    },
    {
      icon: <MapPin className="h-8 w-8 text-red-600" />,
      title: "Prime Location",
      description: "Conveniently located with easy parking access"
    }
  ];

  return (
    <div className="py-24 bg-zinc-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose ALPHA GYM?</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            We provide everything you need to achieve your fitness goals in one place
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-black p-6 rounded-lg hover:transform hover:-translate-y-2 transition duration-300">
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-400">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Features;