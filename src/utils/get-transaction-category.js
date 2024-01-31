import React from 'react';

export function getTransactionCategory(status) {
  switch (status) {
    case 1:
      return <TopUpTransaction />;
    case 2:
      return <P2PTransactions />;
    case 3:
      return <RemittanceTransaction />;
    default:
      break;
  }
}

export function P2PTransactions() {
  return (
    <div className="flex items-center">
      <img src="/icons/ic_transfer.svg" alt="ic_transfer" className="h-6" />
      <div className="ml-2">P2P</div>
    </div>
  );
}
export function RemittanceTransaction() {
  return (
    <div className="flex items-center">
      <img src="/icons/ic_remittance.svg" alt="ic_remittance" className="h-6" />
      <div className="ml-2">Remittance</div>
    </div>
  );
}
export function TopUpTransaction() {
  return (
    <div className="flex items-center">
      <img src="/icons/ic_topup.svg" alt="ic_topup" className="h-6" />
      <div className="ml-2">Top Up</div>
    </div>
  );
}
