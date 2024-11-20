import React from 'react';

interface SectionTitleProps {
  title: string;
  subtitle: string;
}

const SectionTitle = ({ title, subtitle }: SectionTitleProps) => {
  return (
    <div className="text-center mb-16">
      <h2 className="text-3xl md:text-4xl font-bold mb-4">{title}</h2>
      <p className="text-gray-400 max-w-2xl mx-auto">{subtitle}</p>
    </div>
  );
};

export default SectionTitle;