import Layout from '../../layouts/centered';
import React from 'react';
import CopyrightStatement from '../../components/copyright-statement';

function MaintenanceMode() {
  return (
    <Layout>
      <div className="flex flex-col w-full max-w-xl text-center">
        <img
          className="object-contain w-auto h-64 mb-8"
          src="/pages/error-page/illustration.svg"
          alt="svg"
        />
        <h4 className="text-lg font-bold text-grey-800">
          We are under maintenance
        </h4>
        <p className="my-4 text-center text-grey-800">
          We are improving our website.
        </p>
        <div className="my-4">
          <CopyrightStatement />
        </div>
      </div>
    </Layout>
  );
}

export default MaintenanceMode;
