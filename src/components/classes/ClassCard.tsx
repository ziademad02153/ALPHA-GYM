import React from 'react';

interface ClassCardProps {
  title: string;
  image: string;
  time: string;
}

const ClassCard = ({ title, image, time }: ClassCardProps) => {
  return (
    <div className="group relative overflow-hidden rounded-lg">
      <img
        src={image}
        alt={title}
        className="w-full h-96 object-cover transform group-hover:scale-110 transition duration-500"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent"></div>
      <div className="absolute bottom-0 left-0 right-0 p-6">
        <h3 className="text-2xl font-bold mb-2">{title}</h3>
        <p className="text-gray-300">{time}</p>
      </div>
    </div>
  );
};

export default ClassCard;