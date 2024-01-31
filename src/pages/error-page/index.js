import React from 'react';
import Layout from '../../layouts/centered';
import { Link } from 'react-router-dom';
import CopyrightStatement from '../../components/copyright-statement';

const ErrorPage = () => {
  return (
    <Layout>
      <div className="flex flex-col w-full max-w-xl text-center">
        <img
          className="object-contain w-auto h-64 mb-8"
          src="/illustration.svg"
          alt="Oops!"
        />
        <h1 className="text-8xl font-bold text-grey-800 mb-2">Oops!</h1>
        <h4 className="text-lg font-bold text-grey-800">404- Page not found</h4>
        <p className="my-4 text-center text-grey-800">
          The requested URL was not found on this server.
        </p>
        <div className="flex w-full justify-center">
          <Link
            to="/"
            className="btn btn-rounded px-12 py-3 bg-green-500 hover:bg-green-600 text-white"
          >
            Go back
          </Link>
        </div>
        <div className="my-4">
          <CopyrightStatement />
        </div>
      </div>
    </Layout>
  );
};

export default ErrorPage;
