import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getDashboardStats } from '../../store/actions/dashboardActions';
import luggage from '../../assets/flights/luggage.png'
import arrowRight from '../../assets/flights/arrow-right.svg'
import seats from '../../assets/flights/seats.png'
import edit from '../../assets/flights/message-edit.svg'
import { CiCirclePlus } from "react-icons/ci";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

const PaymentSummary = (props) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getDashboardStats());
    dispatch({
      type: 'SET_PALETTE',
      palette: {
        header: 'navbar2'
      }
    })
  }, []); // eslint-disable-line


  const FareDetail = () => {
    return (
      <>
        <div className='bg-white rounded-md p-4 h-auto'>
          <div className='font-bold text-lg mb-4'>Fare Details</div>
          <div className='flex items-start justify-between mb-4'>
            <div className='flex items-start'>
              <IoIosArrowDown size={14} className='text-grey-500 mt-1' />
              <div className='flex flex-col'>
                <div className='font-bold text-md ml-2'>Base Fare</div>
                <div className='text-md ml-2 text-grey-500'>Adult(s) (1 X ₹ 4,590)</div>
              </div>
            </div>
            <div className='text-md'>₹ 4,590</div>
          </div>
          <div className='flex items-start justify-between mb-4'>
            <div className='flex items-start'>
              <IoIosArrowUp size={14} className='text-grey-500 mt-1' />
              <div className='font-bold text-md ml-2'>Taxes & Surcharges</div>
            </div>
            <div className='text-md'>₹ 4,590</div>
          </div>
          <div className='flex justify-between border-t pt-4'>
            <div className='font-bold text-md ml-2'>Total Amount</div>
            <div className='font-bold text-md ml-2 text-orange-primary'>₹ 4,590</div>
          </div>
        </div>
      </>
    )
  }

  const CouponDetail = () => {
    return (
      <>
        <div className='bg-white rounded-md p-4 h-auto mt-5'>
          <div className='font-bold text-lg mb-4'>Coupon Code</div>
          <div className='flex items-start justify-between mb-4'>
            <input
              type="text"
              name="Coupon"
              id="Coupon"
              placeholder='Enter Coupon Code Here'
              autoComplete="Coupon"
              className="h-10 block w-full rounded-md border pl-2 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6"
            />
          </div>
          <div className='font-bold text-md text-blue-primary'>View All Coupons</div>
        </div>
      </>
    )
  }

  return (
    <>
      <div className="mb-6 m-auto flex flex-col space-x-0 lg:space-x-4">
        <div className='flight-half-bg h-48'>
          <div className='container mx-auto'>
            {/* <ModifyFlightSearch /> */}
            <div className='text-white py-10 font-extrabold text-2xl'>Complete your booking</div>
          </div>
        </div>
        <div className='bg-grey-100 pb-10 ml-0'>
          <div className='container mx-auto grid grid-cols-12 gap-4 -mt-20'>
            <div className='col-span-9 min-h-ful rounded-md'>

              <div className='p-4 rounded-md bg-white mb-6'>
                <div className='flex items-center justify-between mb-5'>
                  <div className='text-lg font-extrabold'>Bengaluru → New Delhi</div>
                  <img src={edit} alt='name' className='w-6' />
                </div>
                <div className='text-md font-bold text-grey-500'>Bengaluru → New Delhi    |    Tuesday, Dec 12 · 1 Stop · 11h 30m</div>
              </div>

              <div className='p-4 rounded-md bg-white mb-6'>
                <div className='flex items-center justify-between mb-5'>
                  <div className='text-lg font-extrabold'>Traveller Details</div>
                  <img src={edit} alt='name' className='w-6' />
                </div>
                <div className='text-md font-bold text-grey-500'>Vinayak Hegde</div>
              </div>

              <div className='p-4 rounded-md bg-white mb-6'>
                <div className='flex items-center justify-between mb-5'>
                  <div className='text-lg font-extrabold'>PIN code & State</div>
                  <img src={edit} alt='name' className='w-6' />
                </div>
                <div className='text-md font-bold text-grey-500'>560026 - Karnataka</div>
              </div>

              <div className='p-4 rounded-md bg-white mb-6'>
                <div className='flex items-center justify-between mb-5'>
                  <div className='text-lg font-extrabold'>Seats & Meals</div>
                  <img src={edit} alt='name' className='w-6' />
                </div>
                <div className='text-md font-bold text-grey-500'>Departure - 3C</div>
              </div>

              <div className='p-4 rounded-md bg-white mb-6'>
                <div className='flex items-center justify-between mb-5'>
                  <div className='text-lg font-extrabold flex items-center'>
                    <img src={seats} alt='name' className='w-6 mr-2' />
                    Seats</div>
                </div>
                <div className='text-md font-bold text-grey-500'>A service that provides you a hassle free and comfortable check-in experience at the airport with our priority check-in counter.</div>
                <div className='flex justify-between my-4'>
                  <div className='flex items-center'>
                    <span className='text-md flex items-center'>
                      <img src={luggage} className='w-4 mr-2' alt='name' />
                      Priority Check-in</span>
                  </div>
                  <div className='flex items-center'>
                    <div className='font-bold text-md mr-4'>₹ 1,350</div>
                    <span className='text-md bg-white border cursor-pointer items-center border-grey-400 text-grey-600 px-3 py-1 rounded-md ml-4 flex w-24 justify-end' >Add
                      <CiCirclePlus size={18} className='ml-2' />
                    </span>
                  </div>
                </div>
              </div>

              <div className='p-4 rounded-md bg-white mb-6'>
                <div className='flex items-center justify-between mb-5'>
                  <div className='text-lg font-extrabold flex items-center'>
                    <img src={luggage} alt='name' className='w-6 mr-2' />
                    Lost baggage assistance, trip delay, trip cancellation & more benefits.</div>
                </div>
                <div className='text-md font-bold text-grey-500'>All inclusive cover with lost/delayed Baggage assistance, complimentary travel insurance upto Rs.50,000 for accident, Rs.1,500 for trip delay, Rs.3,000 for missed flight and more.</div>
                <div className='flex justify-between my-4'>
                  <div className='flex items-center'>
                    <span className='text-md text-blue-primary font-bold'>View Tnc</span>
                  </div>
                  <div className='flex items-center'>
                    <div className='font-bold text-md mr-4'>₹ 1,350</div>
                    <span className='text-md bg-white border cursor-pointer items-center border-grey-400 text-grey-600 px-3 py-1 rounded-md ml-4 flex w-24 justify-end' >Add
                      <CiCirclePlus size={18} className='ml-2' />
                    </span>
                  </div>
                </div>
              </div>

              <div className='p-4 rounded-md bg-white mb-6'>
                  <div className='text-md font-bold text-grey-500 mb-5 text-center'>By clicking on the Continue button below to proceed with the booking, I confirm that I have read and I accept the Fare Rules , the Privacy Policy, the User Agreement and Terms of Service of MakeMyTrip</div>
                  <div className='flex justify-center justify-self-end items-center gap-3 bg-orange-primary text-white px-4 py-3 rounded-md  cursor-pointer w-full'>
                    <span className='font-bold text-lg'>Proceed to Pay</span>
                    <img src={arrowRight} alt='arrow' />
                  </div>
              </div>

            </div>
            <div className='col-span-3'>
              <FareDetail />
              <CouponDetail />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};



export default PaymentSummary;
