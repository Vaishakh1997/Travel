import React from 'react';
import Modal1 from '../modals/modal-1';

function WidgetTitle({ title, link = null, className = '', popupContent }) {
  return (
    <div className={`flex justify-between items-center ${className}`}>
      <div className="font-bold text-xl tracking-wide">{title}</div>
      <Modal1 title={title} body={popupContent} link={link} />
    </div>
  );
}

export default WidgetTitle;
