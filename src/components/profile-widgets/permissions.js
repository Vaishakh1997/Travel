import React from 'react';
import { BiCheck } from 'react-icons/bi';

function Permissions({ permissions }) {
  return (
    <div className="my-6 p-6 border border-grey-100 rounded-md bg-white">
      <div className="text-xl font-bold pb-4 mb-2 border-b">
        Permission Information
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {permissions?.map((permission, i) => (
          <div key={i} className="w-full pb-4 pr-4 border-b border-grey-100">
            <div className="flex justify-between items-center mt-4">
              <div className="text-lg font-bold">{permission.name}</div>
              <div className="p-1 rounded-full bg-green-anak">
                <BiCheck className="h-4 w-4 text-white " />
              </div>
            </div>
            {/* <div className="lg:mr-4 mt-1">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s.
              </div> */}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Permissions;
