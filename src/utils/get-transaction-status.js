import React from 'react';
import { BiCheck, BiTime, BiX } from 'react-icons/bi';
import {
  BsFillCheckCircleFill,
  BsFillXCircleFill,
  BsFillClockFill,
} from 'react-icons/bs';

export function getTransactionStatus(status) {
  switch (status) {
    case 1:
      return <TransactionSuccess />;
    case 2:
      return <TransactionPending />;
    case 3:
      return <TransactionFailed />;
    default:
      break;
  }
}
export function getTransactionDetailStatus(status) {
  switch (status) {
    case 1:
      return <Success />;
    case 2:
      return <Pending />;
    case 3:
      return <Failed />;
    default:
      break;
  }
}
export function getRemittanceDetailStatus(status) {
  switch (status) {
    case 1:
      return <RemittanceSuccess />;
    case 2:
      return <RemittancePending />;
    case 3:
      return <RemittanceFailed />;
    default:
      break;
  }
}

function TransactionSuccess() {
  return (
    <div className="flex items-center">
      <div className="p-1 rounded-full bg-green-anak">
        <BiCheck className="h-4 w-4 text-white " />
      </div>
      <div className="ml-2">Success</div>
    </div>
  );
}
function TransactionPending() {
  return (
    <div className="flex items-center">
      <div className="p-1 rounded-full bg-orange-anak">
        <BiTime className="h-4 w-4 text-white " />
      </div>
      <div className="ml-2">Pending</div>
    </div>
  );
}
function TransactionFailed() {
  return (
    <div className="flex items-center">
      <div className="p-1 rounded-full bg-red-anak">
        <BiX className="h-4 w-4 text-white" />
      </div>
      <div className="ml-2">Failed</div>
    </div>
  );
}
function Success() {
  return (
    <div className="text-base font-bold flex items-center text-green-anak">
      <BsFillCheckCircleFill className="mr-2" />
      Transaction Success
    </div>
  );
}
function Pending() {
  return (
    <div className="text-base font-bold flex items-center text-orange-anak">
      <BsFillClockFill className="mr-2" />
      Transaction Pending
    </div>
  );
}
function Failed() {
  return (
    <div className="text-base font-bold flex items-center text-red-anak">
      <BsFillXCircleFill className="mr-2" />
      Transaction Failed
    </div>
  );
}

function RemittanceSuccess() {
  return (
    <div className="bg-green-anak w-10 h-10 mx-auto rounded-full flex items-center justify-center mb-4">
      <BsFillCheckCircleFill className="text-white w-8 h-8" />
    </div>
  );
}
function RemittancePending() {
  return (
    <div className="bg-orange-anak w-10 h-10 mx-auto rounded-full flex items-center justify-center mb-4">
      <BsFillClockFill className="text-white w-8 h-8" />
    </div>
  );
}
function RemittanceFailed() {
  return (
    <div className="bg-red-anak w-10 h-10 mx-auto rounded-full flex items-center justify-center mb-4">
      <BsFillXCircleFill className="text-white w-8 h-8" />
    </div>
  );
}
