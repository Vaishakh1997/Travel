import React from 'react';
import { BiCheck, BiTimeFive, BiX, BiArrowFromBottom } from 'react-icons/bi';

export function getKycStatus(status) {
  switch (status) {
    case 'verified':
      return <KYCApprove />;
    case 'rejected':
      return <KYCReject />;
    case 'pending':
      return <KYCPending />;
    case 'submitted':
      return <KYCInProgress />;
    default:
      break;
  }
}

export function KYCApprove() {
  return (
    <div className="flex items-center">
      <div className="p-1 rounded-full bg-green-anak">
        <BiCheck className="h-4 w-4 text-white " />
      </div>
      <div className="ml-2 text-green-anak">Verified</div>
    </div>
  );
}
export function KYCReject() {
  return (
    <div className="flex items-center">
      <div className="p-1 rounded-full bg-red-anak">
        <BiX className="h-4 w-4 text-white" />
      </div>
      <div className="ml-2 text-red-anak">Rejected</div>
    </div>
  );
}
export function KYCPending() {
  return (
    <div className="flex items-center">
      <div className="p-1 rounded-full bg-orange-anak">
        <BiTimeFive className="h-4 w-4 text-white" />
      </div>
      <div className="ml-2 text-orange-anak">Pending</div>
    </div>
  );
}
export function KYCInProgress() {
  return (
    <div className="flex items-center">
      <div className="p-1 rounded-full bg-blue-anak">
        <BiArrowFromBottom className="h-4 w-4 text-white" />
      </div>
      <div className="ml-2 text-blue-anak">In Progress</div>
    </div>
  );
}
