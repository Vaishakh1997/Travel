import React from 'react';

const SectionTitle = ({ title = null, subtitle = null, right = null }) => {
  return (
    <div className="w-full">
      <div className="flex flex-row items-center justify-between mb-4">
        <div className="flex flex-col">
          <div className="text-xl lg:text-3xl font-bold text-white-50">
            {title}
          </div>
          {subtitle && <div className="text-xl font-bold">{subtitle}</div>}
        </div>
        <div className="mt-1">{right}</div>
      </div>
    </div>
  );
};

export default SectionTitle;
