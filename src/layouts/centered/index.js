import React from 'react';

const Centered = ({ children }) => {
  return (
    <div
      data-layout="centered"
      className="w-full min-h-screen flex flex-col items-center justify-center bg-grey-50"
    >
      {children}
    </div>
  );
};
export default Centered;
