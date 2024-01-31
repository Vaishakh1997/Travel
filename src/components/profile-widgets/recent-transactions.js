import React from 'react';
import { Link, useRouteMatch } from 'react-router-dom';
import TransactionDetails from '../../pages/customers/transaction-details';
import WidgetTitle from './widget-title';

function RecentTransactions() {
  let { url } = useRouteMatch();
  return (
    <>
      <div className="flex justify-between items-center mb-2">
        <WidgetTitle className="mt-2" title="Recent Transaction" />
        <Link
          to={`${url}/transactions`}
          className="text-blue-link font-bold cursor-pointer mt-2"
        >
          View All
        </Link>
      </div>
      {Array(6)
        .fill()
        .map((item, i) => (
          <TransactionDetails button={false} key={i} />
        ))}
    </>
  );
}

export default RecentTransactions;
