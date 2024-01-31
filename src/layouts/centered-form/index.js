import React from 'react';
import CopyrightStatement from '../../components/copyright-statement';
import { useSelector } from 'react-redux';

const Index = ({ title, subtitle, children }) => {
  let { config } = useSelector((state) => ({ config: state.config }));
  return (
    <>
      {/* <div className="flex flex-col bg-white border border-grey-200 w-full max-w-md rounded-lg shadow-md overflow-hidden mx-2 lg:mx-auto"> */}
      <div className="flex flex-col w-full max-w-md overflow-hidden mx-2 lg:mx-auto">

        <div className="relative w-full flex items-center h-24 lg:h-32">
          <div className="w-2/3 p-4 lg:p-6">
            <div className="text-base lg:text-lg font-bold text-blue-500 mb-2">
              {title}
            </div>
            <div className="text-sm text-blue-500">{subtitle}</div>
          </div>
          <img
            src="/images/image-1.png"
            alt="login"
            className="absolute right-0 bottom-0 w-32 lg:w-48"
          />
        </div>
        <div className="flex space-x-2 items-center py-6 px-4 lg:px-6">
          <div className="">
            <img
              className="h-10 lg:h-14"
              src={config.logoUrl}
              alt={config.name}
            />
          </div>
          {/* <div className="text-lg font-bold">{config.name}</div> */}
        </div>
        <div className="flex flex-col w-full mb-4 px-6">{children}</div>
      </div>
      <div className="self-center my-4 text-grey-anak">
        {/* <CopyrightStatement /> */}
      </div>
    </>
  );
};

export default Index;
