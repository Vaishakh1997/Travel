import React from 'react';
import { BiCheck, BiTimeFive } from 'react-icons/bi';
import { camelCaseString } from './string-helpers';

export function Cases({ status, color, icon }) {
  return (
    <div className="flex items-center">
      <div className={`p-1 rounded-full bg-${color}-anak`}>{icon}</div>
      <div className={`ml-2 text-${color}-anak`}>{camelCaseString(status)}</div>
    </div>
  );
}
const statusIsGreen = ['case_closed'];
const statusIsRed = [
  'wallet_failed',
  'kyc_info_user',
  'expiry_info_admin',
  'expiry_validate_admin',
];
const statusIsOrange = [
  'id_info_admin',
  'kyc_attempt_reset_admin',
  'kyc_review_admin',
  'kyc_validate_admin',
  'work_info_admin',
  'work_validate_admin',
  'screening_failed_admin',
  'address_info_admin',
];
export function getCaseStatus(status) {
  if (statusIsGreen.includes(status)) {
    return (
      <Cases
        status={status}
        color="green"
        icon={<BiCheck className="h-4 w-4 text-white " />}
      />
    );
  } else if (statusIsRed.includes(status)) {
    return (
      <Cases
        status={status}
        color="red"
        icon={<BiTimeFive className="h-4 w-4 text-white" />}
      />
    );
  } else if (statusIsOrange.includes(status)) {
    return (
      <Cases
        status={status}
        color="orange"
        icon={<BiTimeFive className="h-4 w-4 text-white" />}
      />
    );
  } else {
    return (
      <Cases
        status={status}
        color="blue"
        icon={<BiTimeFive className="h-4 w-4 text-white" />}
      />
    );
  }
}
