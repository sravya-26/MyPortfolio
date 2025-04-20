import React from 'react';

interface SectionTitleProps {
  title: string;
  subtitle: string;
  icon?: React.ReactNode;
}

const SectionTitle: React.FC<SectionTitleProps> = ({ title, subtitle, icon }) => {
  return (
    <div className="text-center">
      <div className="flex items-center justify-center gap-3 mb-2">
        {icon && icon}
        <h2 className="text-3xl font-bold text-gray-800">{title}</h2>
      </div>
      <p className="text-gray-600">{subtitle}</p>
      <div className="w-24 h-1 bg-indigo-600 mx-auto mt-4"></div>
    </div>
  );
};

export default SectionTitle;