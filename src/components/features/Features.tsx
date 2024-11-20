import React from 'react';
import { Dumbbell, Clock, MapPin, Users } from 'lucide-react';
import FeatureCard from './FeatureCard';
import SectionTitle from '../shared/SectionTitle';

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
      description: "Located in Kafr Saad, Benha - easy to find and access"
    }
  ];

  return (
    <div className="py-24 bg-zinc-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          title="Why Choose ALPHA GYM?"
          subtitle="We provide everything you need to achieve your fitness goals in one place"
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Features;