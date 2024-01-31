import React, { useState } from 'react';
import { BiChevronRight } from 'react-icons/bi';
import { Drawer, Divider, Avatar, Spin } from 'antd';
import { useTranslation } from 'react-i18next';
import { dateFormat, utcToLocalDateTime } from '../../utils/dateFormat';
import { useDispatch, useSelector } from 'react-redux';
import { getTransactionAction } from '../../store/actions/transactionActions';
import { getTransactionDetailStatus } from '../../utils/get-transaction-status';

function CustomerRecentTransaction({ transactionId, transactionDetails }) {
  const { t } = useTranslation();
  function renderIcon(method) {
    switch (method) {
      case 1:
        return <img alt="" src="/images/icons/ic_topup_history.svg" />;
      case 2:
        return <img alt="" src="/images/icons/ic_paid_history.svg" />;
      case 3:
        return <img alt="" src="/images/icons/ic_remittance_history.svg" />;
      default:
        return <img alt="" src="/images/icons/ic_topup_history.svg" />;
    }
  }
  const [drawerVisible, setDrawerVisible] = useState(false);
  const dispatch = useDispatch();
  const transactionDetailsHandler = () => {
    setDrawerVisible(true);
    dispatch(getTransactionAction(transactionId));
  };
  const { getTransaction, getTransactionLoading, getTransactionError } =
    useSelector((state) => state.transaction);
  return (
    <>
      <div
        key={getTransaction?.id}
        className="recent-trans flex justify-between items-center py-3 border-b cursor-pointer"
        onClick={transactionDetailsHandler}
      >
        <div className="flex items-center">
          <div className="rounded-full mr-4">
            {/* <img src="/images/icons/ic_paid_history.svg" /> */}
            {renderIcon(transactionDetails?.category)}
          </div>
          <div>
            <div className="font-bold text-base">
              {transactionDetails?.sender_user?.name}
            </div>
            <div>{transactionDetails?.sender_user?.mobile}</div>
          </div>
        </div>
        <div className="flex items-center">
          <div className="mr-3">
            <div className="font-bold text-base">
              {/* {item?.method === 'deposit' ? '-' : '+'}  */}
              SGD {transactionDetails?.amount}
            </div>
            <div>{dateFormat(transactionDetails?.created_at)}</div>
          </div>
          <BiChevronRight className="w-5 h-5" />
        </div>
      </div>

      <Drawer
        title={t('p2p_transactions.details_modal.title')}
        onClose={() => setDrawerVisible(false)}
        visible={drawerVisible}
      >
        {getTransactionError ? (
          <div>Failed to get transaction</div>
        ) : getTransactionLoading ? (
          <div className="grid grid-cols-1 justify-items-center text-center">
            <Spin />
          </div>
        ) : (
          <>
            <div className="grid grid-cols-1 gap-y-3 justify-items-center text-center pb-6">
              <Avatar>{getTransaction?.sender_user?.name[0]}</Avatar>
              <div className="">
                <div className="text-gray-600 mb-1">
                  {t('p2p_transactions.details_modal.received_from')}
                </div>
                <div className="text-base font-bold">
                  {getTransaction?.sender_user?.name} |{' '}
                  {getTransaction?.sender_user?.mobile}
                </div>
              </div>
              <div className="">
                <div className="text-gray-600 mb-1">
                  {t('p2p_transactions.details_modal.amount')}
                </div>
                <div className="text-3xl font-bold flex">
                  SGD
                  <span
                    className={`text-${getTransaction?.status === 1
                        ? 'green'
                        : getTransaction?.status === 2
                          ? 'orange'
                          : 'red'
                      }-anak flex items-center mx-2`}
                  >
                    {getTransaction?.amount}
                    {/* <BsFillArrowDownLeftSquareFill size={18} className="ml-2" /> */}
                  </span>
                </div>
              </div>
              <div className="">
                <div className="text-gray-600 mb-1">
                  {t('p2p_transactions.details_modal.date_time')}
                </div>
                <div className="text-base font-bold">
                  {utcToLocalDateTime(getTransaction?.created_at)}
                </div>
              </div>
              <div className="">
                <div className="text-gray-600 mb-1">
                  {t('p2p_transactions.details_modal.status')}
                </div>
                {getTransactionDetailStatus(getTransaction?.status)}
              </div>
            </div>
            <Divider orientation="center" className="font-bold">
              {t('p2p_transactions.details_modal.credit_title')}
            </Divider>

            <div className="py-4 grid grid-cols-1 gap-y-3 justify-items-center text-center pt-5">
              <div className="text-gray-600 mb-1">
                {t('p2p_transactions.details_modal.transaction_id')}
              </div>
              <div className="text-base font-bold">
                {getTransaction?.transfer?.reference_no}
              </div>
              <div className="">
                <div className="text-gray-600 mb-1">
                  {t('p2p_transactions.details_modal.to')}
                </div>
                <div className="text-base font-bold">
                  {getTransaction?.recipient_user?.name}
                </div>
                <div className="text-base font-bold">
                  VBN - {getTransaction?.recipient_user?.wallet_id}
                </div>
              </div>
              <div className="">
                <div className="text-gray-600 mb-1">
                  {t('p2p_transactions.details_modal.from')}
                </div>
                <div className="text-base font-bold">
                  {getTransaction?.sender_user?.name}
                </div>
                <div className="text-base font-bold">
                  VBN - {getTransaction?.sender_user?.wallet_id}
                </div>
              </div>
              {getTransaction?.transfer?.comments && (
                <>
                  <div className="pt-3">
                    <div className="text-gray-600 mb-1">
                      Remarks
                    </div>
                    <div className="text-base font-bold">
                      {getTransaction?.transfer?.comments}
                    </div>
                  </div>
                </>
              )}
            </div>
          </>
        )}
      </Drawer>
    </>
  );
}

export default CustomerRecentTransaction;
