import React from 'react';
import { Link } from 'react-router-dom';

function Fallback() {
  return (
    <div className="flex flex-col w-full justify-center items-center pt-4 md:pt-8">
      <img
        className="object-contain w-auto h-64 mb-8"
        src="/illustration.svg"
        alt="Something went wrong"
      />
      <h4 className="text-lg font-bold text-grey-anak">
        Something went wrong!
      </h4>
      <p className="my-4 text-center text-grey-anak">
        We have got the report and investigating the issue.
      </p>
      <div className="flex w-full justify-center">
        <Link
          to="/dashboard"
          className="btn btn-rounded px-12 py-3 bg-green-anak text-white text-center hover:text-white"
        >
          Go to Home
        </Link>
      </div>
    </div>
  );
}

export default Fallback;
