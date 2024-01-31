import React, { useEffect, useState } from 'react';
import SectionTitle from '../../components/dashboard/section-title';
import Breadcrumb from '../../components/breadcrumbs';
import { useDispatch, useSelector } from 'react-redux';
import { Checkbox } from 'antd';
// import { getDashboardStats } from '../../store/actions/dashboardActions';

const Hotel = () => {
  const dispatch = useDispatch();

  let breadcrumbsItem = [
    {
      home: true,
      title: 'Home',
      url: '/',
      last: false,
    },
    {
      home: false,
      title: 'Flight',
      url: '/',
      last: true
    },
  ];

  const { stats, statsLoading } = useSelector((state) => state.dashboard);
  const [isCheckedOneWay, setIsCheckedOneWay] = useState(true);
  const [isCheckedRoundtrip, setIsCheckedRoundtrip] = useState(false);

  useEffect(() => {
    // dispatch(getDashboardStats());
  }, []); // eslint-disable-line

  const handleChangeOneWay = () => {
    if (!isCheckedOneWay && isCheckedRoundtrip) {
      setIsCheckedOneWay(!isCheckedOneWay);
    }
    if (isCheckedRoundtrip) {
      setIsCheckedRoundtrip(!isCheckedRoundtrip)
    }
  }

  const handleChangeRoundtrip = () => {
    if (!isCheckedRoundtrip && isCheckedOneWay) {
      setIsCheckedRoundtrip(!isCheckedRoundtrip);
    }
    if (isCheckedOneWay) {
      setIsCheckedOneWay(!isCheckedOneWay)
    }
  }

  return (
    <>
      <div className='flex items-center'>
        <ul class="space-y-4">
          {/* <Checkbox checked={isCheckedOneWay} onChange={handleChangeOneWay}>One way</Checkbox>
          <Checkbox checked={isCheckedRoundtrip} onChange={handleChangeRoundtrip}>Round trip</Checkbox> */}
        </ul>
      </div>
    </>
  );
};
export default Hotel;
