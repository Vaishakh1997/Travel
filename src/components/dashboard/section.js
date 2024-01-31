import React from 'react';

const Section = ({
  middle = null,
  title,
  description,
  right = null,
  children,
  className = null,
  label,
}) => {
  return (
    <div
      className={
        'flex-auto w-full p-4 rounded-lg bg-white border border-grey-100 '
      }
    >
      <div className="flex flex-col lg:flex-row items-center justify-between mb-6">
        <div className="flex flex-col mb-4 md:mb-2 lg:mb-0">
          <div className="text-md font-bold">{title}</div>
          <div className="text-sm font-bold">{description}</div>
        </div>
        {middle && (
          <div className="flex items-center space-x-1 lg:space-x-2 lg:ml-auto lg:mr-3">
            <div className="flex items-center leading-none mr-2 lg:mr-0">
              <span className={`w-4 h-4 bg-${middle}-anak mr-1 rounded`}></span>
              {label?.one}
            </div>
            <div className="flex items-center leading-none">
              <span className={`w-4 h-4 bg-${middle}-200 mr-1 rounded`}></span>
              {label?.two}
            </div>
          </div>
        )}
        <div className={`${className} mb-4 md:mb-0`}>{right}</div>
      </div>
      {children}
    </div>
  );
};

export default Section;
