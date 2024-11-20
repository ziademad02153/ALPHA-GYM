import React from 'react';
import ClassCard from './ClassCard';
import SectionTitle from '../shared/SectionTitle';

const Classes = () => {
  const classes = [
    {
      title: "Strength Training",
      image: "https://images.unsplash.com/photo-1534367507873-d2d7e24c797f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
      time: "Mon, Wed, Fri - 9:00 AM"
    },
    {
      title: "HIIT",
      image: "https://images.unsplash.com/photo-1601422407692-ec4eeec1d9b3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
      time: "Tue, Thu - 10:00 AM"
    },
    {
      title: "Yoga",
      image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
      time: "Daily - 7:00 AM"
    }
  ];

  return (
    <div className="py-24 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          title="Featured Classes"
          subtitle="Join our diverse range of classes led by expert instructors"
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {classes.map((cls, index) => (
            <ClassCard key={index} {...cls} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Classes;