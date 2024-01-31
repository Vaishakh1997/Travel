import React from 'react';

function TabContact({ email, phone, website }) {
  return (
    <>
      <div className="flex flex-col lg:flex-row border-b pb-3 my-4">
        <span className="block w-56 pr-15">Contact Email</span>
        <span className="font-bold">{email}</span>
      </div>
      <div className="flex flex-col lg:flex-row border-b pb-3 my-4">
        <span className="block w-56 pr-15">Contact Phone</span>
        <span className="font-bold">{phone}</span>
      </div>
      <div className="flex flex-col lg:flex-row">
        <span className="block w-56 pr-15">Website</span>
        <span className="font-bold">{website}</span>
      </div>
    </>
  );
}

export default TabContact;
