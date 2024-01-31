import React from 'react';
import { BiCheck, BiTimeFive } from 'react-icons/bi';

export const getIGWStatus = (status) => {
  switch (status) {
    case "COMPLETED" || "OLD_VERSION":
      return (
        <div className="flex items-center">
          <div className="p-1 rounded-full bg-green-anak">
            <BiCheck className="h-4 w-4 text-white " />
          </div>
          <div className="ml-2 underline text-green-anak">Completed</div>
        </div>
      );
    case "FIRST_REVIEW":
      return (
        <div className="flex items-center">
          <div className="p-1 rounded-full bg-orange-anak">
            <BiTimeFive className="h-4 w-4 text-white" />
          </div>
          <div className="ml-2 underline text-orange-anak">First Review</div>
        </div>
      );
    case "UPDATE_REVIEW":
      return (
        <div className="flex items-center">
          <div className="p-1 rounded-full bg-orange-anak">
            <BiTimeFive className="h-4 w-4 text-white" />
          </div>
          <div className="ml-2 underline text-orange-anak">Update Review</div>
        </div>
      );
    default:
      return (
        <div className="flex items-center">
        -          
        </div>
      )
      // break;
  }
};
