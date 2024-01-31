import React, { useEffect, useState } from 'react';
import SectionTitle from '../../components/dashboard/section-title';
import Breadcrumb from '../../components/breadcrumbs';
import { useDispatch, useSelector } from 'react-redux';
import { getDashboardStats } from '../../store/actions/dashboardActions';
import GetTabLists from '../../components/tab-lists/index'
import Hotel from '../hotel/Hotel'
import Card from 'antd/lib/card/Card';

const Index = (props) => {
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
      title: 'Hotel',
      url: '/',
      last: true
    },
  ];

  const { stats, statsLoading } = useSelector((state) => state.dashboard);

  useEffect(() => {
    dispatch(getDashboardStats());
    dispatch({
      type: 'SET_PALETTE',
      palette: {
          header: 'navbar1'
      }
    })
  }, []); // eslint-disable-line


  return (
    <>
        <div className="main w-full text-white home-bg">
        <div className='container mx-auto'>
          <div className="min-h-screen w-full py-5 px-4 lg:pb-6">
          <SectionTitle
        // title={'Hotel Booking'}
        // right={<Breadcrumb items={breadcrumbsItem} />}
      />
      <div className="mb-6 m-auto flex flex-col space-x-0 lg:space-x-4">
        {/* <Card className='w-fit m-auto flex items-center justify-items-center z-10'> */}
          <GetTabLists />
        {/* </Card> */}

        <Card className='h-96 w-100 m-auto flex items-start justify-items-center -mt-5 ml-0'>
          <Hotel />
        </Card>
      </div>
          </div>
        </div>
      </div>
      
    </>
  );
};
export default Index;
