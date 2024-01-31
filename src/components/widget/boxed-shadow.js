import React from 'react';

function BoxedShadow({ children, className }) {
  return (
    <div
      className={`bg-white rounded-md shadow-lg border border-grey-200 p-4 ${
        className ? className : ''
      }`}
    >
      {children}
    </div>
  );
}

export default BoxedShadow;
