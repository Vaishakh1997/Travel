import React from 'react';
import { BiCheck, BiTime, BiX } from 'react-icons/bi';

export function getWalletStatus(status) {
  switch (status) {
    case 'processed':
      return <Processed />;
    case 'pending':
      return <Pending />;
    case 'rejected':
      return <Failed />;
    case 'suspended':
      return <Suspended />;
    case 'blocked':
      return <Blocked />;
    default:
      break;
  }
}

function Processed() {
  return (
    <div className="flex items-center">
      <div className="p-1 rounded-full bg-green-anak">
        <BiCheck className="h-4 w-4 text-white " />
      </div>
      <div className="ml-2">Processed</div>
    </div>
  );
}
function Pending() {
  return (
    <div className="flex items-center">
      <div className="p-1 rounded-full bg-orange-anak">
        <BiTime className="h-4 w-4 text-white " />
      </div>
      <div className="ml-2">Pending</div>
    </div>
  );
}
function Failed() {
  return (
    <div className="flex items-center">
      <div className="p-1 rounded-full bg-red-anak">
        <BiX className="h-4 w-4 text-white" />
      </div>
      <div className="ml-2">Failed</div>
    </div>
  );
}
function Suspended() {
  return (
    <div className="flex items-center">
      <div className="p-1 rounded-full bg-red-anak">
        <BiX className="h-4 w-4 text-white" />
      </div>
      <div className="ml-2">Suspended</div>
    </div>
  );
}
function Blocked() {
  return (
    <div className="flex items-center">
      <div className="p-1 rounded-full bg-red-anak">
        <BiX className="h-4 w-4 text-white" />
      </div>
      <div className="ml-2">Blocked</div>
    </div>
  );
}
