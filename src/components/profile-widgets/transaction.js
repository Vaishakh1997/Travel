import React from 'react';
import { BiChevronRight, BiWallet } from 'react-icons/bi';

function Transaction() {
  return (
    <div
      className="flex justify-between items-center py-4 border-b cursor-pointer"
    // onClick={onClick}
    >
      <div className="flex items-center">
        <div className="p-2 rounded-full bg-grey-200 mr-4">
          <BiWallet className="w-6 h-6" />
        </div>
        <div>
          <div className="font-bold text-base">Agung</div>
          <div>+ 65 99999 66666</div>
        </div>
      </div>
      <div className="flex items-center">
        <div className="mr-2">
          <div className="font-bold text-base">- SGD 900.00</div>
          <div>Oct 13, 10:02 AM</div>
        </div>
        <BiChevronRight className="w-5 h-5" />
      </div>
    </div>
  );
}

export default Transaction;
