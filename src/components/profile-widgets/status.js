import React from 'react';
import { BiCheck, BiTimeFive, BiX, BiFingerprint } from 'react-icons/bi';


function Status({ status, title, data, className }) {
  return (
    <>
      <div className={`pb-2 flex justify-between items-center ${className}`} >
        <div>
          <div className="text-sm">{title}</div>
          <div className="text-base font-bold">{data}</div>
        </div>
        {status && (
          <div className="">
            {status === 'approved' && (
              <BiCheck className="w-4 h-4 bg-green-A700 text-white rounded-full" />
            )}
            {status === 'pending' && (
              <BiTimeFive className="w-4 h-4 bg-orange-700 text-white rounded-full" />
            )}
            {status === 'rejected' && (
              <BiX className="w-4 h-4 bg-red-700 text-white rounded-full" />
            )}
            {status === 'progress' && (
              <BiFingerprint className="w-4 h-4 bg-blue-A700 text-white rounded-full" />
            )}
          </div>
        )}
      </div>
    </>
  );
}

export default Status;
