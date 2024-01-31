import React from 'react';
import { BiCheck, BiX, BiArrowFromBottom } from 'react-icons/bi';

export const getOrgUserStatus = (status) => {
  switch (status) {
    case 1:
      return (
        <div className="flex items-center">
          <div className="p-1 rounded-full bg-green-anak">
            <BiCheck className="h-4 w-4 text-white " />
          </div>
          <div className="ml-2 underline text-blue-anak">Active</div>
        </div>
      );
    case 2:
      return (
        <div className="flex items-center">
          <div className="p-1 rounded-full bg-grey-anak">
            <BiArrowFromBottom className="h-4 w-4 text-white" />
          </div>
          <div className="ml-2 underline text-grey-anak">Suspended</div>
        </div>
      );
    case 3:
      return (
        <div className="flex items-center">
          <div className="p-1 rounded-full bg-red-anak">
            <BiX className="h-4 w-4 text-white" />
          </div>
          <div className="ml-2 underline text-red-anak">Deleted</div>
        </div>
      );
    default:
      break;
  }
};
