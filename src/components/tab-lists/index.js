import React from 'react';
import flightImage from '../../assets/Flight.svg'
import hotelImage from '../../assets/Hotel.svg'
import { Link } from 'react-router-dom';

function GetTabLists() {
  return (
    <>
      <div className='bg-white flex items-center w-fit m-auto justify-items-center z-10 shadow-sm rounded-lg'>
        <Link to='/flight'>
          <div className='flex flex-col justify-items-center items-center py-3 px-12 pb-0 cursor-pointer rounded-lg'>
            <img src={flightImage} width={50} alt='flight' />
            <p className='mt-1 text-md font-bold border-orange-primary border-b-2 w-24 text-center pb-2'>Flights</p>
          </div>
        </Link>
        <Link to='/hotel'>
          <div className='flex flex-col justify-items-center items-center py-3 px-12 pb-0 cursor-pointer rounded-lg '>
            <img src={hotelImage} width={50} alt='hotel' />
            <p className='mt-1 text-md font-bold w-24 text-center pb-2'>Hotels</p>
          </div>
        </Link>
      </div>
    </>
  );
}

export default GetTabLists;