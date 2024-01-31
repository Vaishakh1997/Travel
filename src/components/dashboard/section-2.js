import React from 'react';

const SectionTwo = ({ title, description, right = null, children }) => {
  return (
    <div className="relative w-full p-4 rounded-lg bg-white border border-grey-100 dark:bg-dark-95 dark:border-dark-90">
      <div className="absolute right-0 items-center justify-between mb-6">
        {right}
      </div>
      {children}
    </div>
  );
};

export default SectionTwo;
