import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { getDashboardStats } from '../../store/actions/dashboardActions';
import { Checkbox, Slider } from 'antd';
import arrowDown from '../../assets/flights/arrow-down.svg'
import arrowCircleDown from '../../assets/flights/arrow-circle-down.svg'
import flightCompanyLogo from '../../assets/flights/flight-company.png'
import rupee from '../../assets/flights/rupee.svg'
import offer from '../../assets/flights/offer.svg'
import discount from '../../assets/flights/discount.svg'
import stickIcon from '../../assets/flights/stick-icon.png'
import { Link } from 'react-router-dom';
import { FaArrowRight, FaArrowCircleRight } from "react-icons/fa";

const FlightList2 = (props) => {
  const dispatch = useDispatch();

  let travelclass = [
    {
      "key": "any",
      "value": "Any"
    },
    {
      "key": "economy",
      "value": "Economy"
    },
    {
      "key": "premium_economy",
      "value": "Premium Economy"
    },
    {
      "key": "business",
      "value": "Business"
    },
    {
      "key": "premium_business",
      "value": "Premium Business"
    },
    {
      "key": "first",
      "value": "First Class"
    }
  ]

  const [selectedTravelClass, setSelectedTravelClass] = useState('Any')

  useEffect(() => {
    dispatch(getDashboardStats());
    dispatch({
      type: 'SET_PALETTE',
      palette: {
        header: 'navbar2'
      }
    })
  }, []); // eslint-disable-line

  const handleSubmitTravelClass = (selectedTravelClass) => {
    if (document.getElementById(selectedTravelClass))
      document.getElementById(selectedTravelClass).checked = true;
    setSelectedTravelClass(selectedTravelClass)
  }

  const RoundTripFlightList = () => {
    return (
      <>
        <div className='grid grid-cols-2 gap-3 mt-4 mb-2'>
          <div className='col-span-1 border p-3 bg-white'>
            <div className='text-md font-bold mb-3'>Bengaluru → Mumbai Tue, 5 Dec</div>
            <div className='grid grid-cols-8 bg-grey-200 p-1 rounded-sm'>
              <div className='col-span-2 text-xs text-black text-center cursor-pointer'>Departure</div>
              <div className='col-span-2 text-xs text-black text-center cursor-pointer'>Duration</div>
              <div className='col-span-2 text-xs text-black text-center cursor-pointer'>Arrival</div>
              <div className='col-span-2 text-xs text-black text-center cursor-pointer'>Price</div>
            </div>
          </div>
          <div className='col-span-1 border p-3 bg-white'>
            <div className='text-md font-bold mb-3'>Bengaluru → Mumbai Tue, 5 Dec</div>
            <div className='grid grid-cols-8 bg-grey-200 p-1 rounded-sm'>
              <div className='col-span-2 text-xs text-black text-center cursor-pointer'>Departure</div>
              <div className='col-span-2 text-xs text-black text-center cursor-pointer'>Duration</div>
              <div className='col-span-2 text-xs text-black text-center cursor-pointer'>Arrival</div>
              <div className='col-span-2 text-xs text-black text-center cursor-pointer'>Price</div>
            </div>
          </div>
        </div>
        <div className='grid grid-cols-12 gap-x-3 items-center '>

          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item, index) =>
            <div className='col-span-6 border p-3 bg-white cursor-pointer border-blue-50 border-b-8'>
              <div className='grid grid-cols-2'>
                <div className='col-span-12 flex items-center border-b pb-2'>
                  <img src={flightCompanyLogo} alt='logo' className='w-10 p-1 mr-2' />
                  <div className='font-bold text-md'>Akasa Air</div>
                </div>
                <div className='col-span-12'>
                  <div className='grid grid-cols-12 items-center'>
                    <div className=' col-span-10 flex flex-col'>
                      <div className='grid grid-cols-4 border-orange-primary border-b text-center py-2'>
                        <div className='col-span-1 font-bold text-md'>07:55</div>
                        <div className='col-span-1 font-bold text-md text-blue-primary'>02h:45m</div>
                        <div className='col-span-1 font-bold text-md'>10:40</div>
                        <div className='col-span-1 font-bold text-md'>₹6,999</div>
                      </div>
                      <div className='grid grid-cols-4 text-center py-2'>
                        <div className='col-span-1 font-bold text-xs'>Bengaluru</div>
                        <div className='col-span-1 font-bold text-xs text-grey-500'>Direct Flight</div>
                        <div className='col-span-1 font-bold text-xs'>New Delhi</div>
                        <div className='col-span-1 font-bold text-xs text-grey-500'>Per Adult</div>
                      </div>
                    </div>
                    <div className='col-span-2 flex justify-center'>
                      <Checkbox className='text-ld checkbox-blue' id='select'></Checkbox>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </>
    )
  }

  const StickyFooter = () => {
    return (
      <div className='grid grid-cols-12 gap-0 mt-4 mb-2 sticky bottom-0 border shadow-md rounded-lg overflow-hidden'>
        <div className='col-span-5 p-3 bg-deep-purple-dark'>
          <div className='text-white font-bold text-md'>Departure - <span className='text-green-primary'>Air India Express</span></div>
          <div className='flex items-center py-3 text-white'>
            <img src={stickIcon} alt='logo' className='w-4 mr-2' />
            <div className='font-bold text-md flex items-center'>07:55
              <FaArrowRight className='mx-3' />
              02h:45
            </div>
            <div className='font-bold text-md flex ml-10'>₹6,999</div>
          </div>
          <div className='flex text-white font-bold text-md items-center'>View flight details
            <FaArrowCircleRight className='text-orange-primary ml-3' />
          </div>
        </div>
        <div className='col-span-5 p-3 bg-black'>
          <div className='text-white font-bold text-md'>Return - <span className='text-green-primary'>Air India Express</span></div>
          <div className='flex items-center py-3 text-white'>
            <img src={stickIcon} alt='logo' className='w-4 mr-2' />
            <div className='font-bold text-md flex items-center'>07:55
              <FaArrowRight className='mx-3' />
              02h:45
            </div>
            <div className='font-bold text-md flex ml-10'>₹6,999</div>
          </div>
          <div className='flex text-white font-bold text-md items-center'>View flight details
            <FaArrowCircleRight className='text-orange-primary ml-3' />
          </div>
        </div>
        <div className='col-span-2 p-3 bg-white'>
          <Link to='/flight-booking'>
            <div className='flex justify-center items-center gap-3 bg-orange-primary text-white px-3 py-2 rounded-md mb-2'>
              <span className='font-bold text-md'>Book Now</span>
            </div>
          </Link>
          <Link to='/flight-booking'>
            <div className='flex justify-center items-center gap-3 bg-white border border-grey-400 text-black px-3 py-2 rounded-md mt-2'>
              <span className='font-bold text-md'>Lock Price</span>
            </div>
          </Link>
        </div>

      </div>
    )
  }


  const SideFilters = () => {
    return (
      <>
        <div className='mb-8'>
          <div className='font-bold text-md mb-3'>Popular Filter</div>
          <div>
            <div className='flex justify-between mb-2'>
              <Checkbox className='text-sm checkbox-blue' id='filter1' >Checkbox</Checkbox>
              <div className='font-bold text-blue-primary'>₹ 8,239</div>
            </div>
            <div className='flex justify-between mb-2'>
              <Checkbox className='text-sm checkbox-blue' id='filter1' >Late Departures</Checkbox>
              <div className='font-bold text-blue-primary'>₹ 8,239</div>
            </div>
            <div className='flex justify-between mb-2'>
              <Checkbox className='text-sm checkbox-blue' id='filter1' >1 Stop</Checkbox>
              <div className='font-bold text-blue-primary'>₹ 8,239</div>
            </div>
            <div className='flex justify-between mb-2'>
              <Checkbox className='text-sm checkbox-blue' id='filter1' >AfterNoon Departu...</Checkbox>
              <div className='font-bold text-blue-primary'>₹ 8,239</div>
            </div>
          </div>
          <div className='text-blue-primary'>+ 3 More</div>
        </div>

        <div className='mb-8'>
          <div className='font-bold text-md mb-3'>Price Range</div>
          <div>
            <Slider defaultValue={30} />
            <div className='flex justify-between mt-3'>
              <div className=''>₹ 8,239</div>
              <div className=''>₹ 8,239</div>
            </div>

          </div>
        </div>

        <div className='mb-8'>
          <div className='font-bold text-md mb-3'>Journey Preference</div>
          <div>
            <div className='flex mb-2'>
              <Checkbox className='text-sm checkbox-blue' id='filter1' >Direct Flight</Checkbox>
            </div>
            <div className='flex mb-2'>
              <Checkbox className='text-sm checkbox-blue' id='filter1' >Layover</Checkbox>
            </div>
          </div>
          <div className='text-blue-primary'>+ 3 More</div>
        </div>

        <div className='mb-3'>
          <div className='font-bold text-md mb-3'>Airlines</div>
          <div>
            <div className='flex justify-between mb-2'>
              <Checkbox className='text-sm checkbox-blue' id='filter1' >Air India</Checkbox>
              <div className='font-bold text-blue-primary'>₹ 8,239</div>
            </div>
            <div className='flex justify-between mb-2'>
              <Checkbox className='text-sm checkbox-blue' id='filter1' >Air India Express</Checkbox>
              <div className='font-bold text-blue-primary'>₹ 8,239</div>
            </div>
            <div className='flex justify-between mb-2'>
              <Checkbox className='text-sm checkbox-blue' id='filter1' >Akasa Air</Checkbox>
              <div className='font-bold text-blue-primary'>₹ 8,239</div>
            </div>
            <div className='flex justify-between mb-2'>
              <Checkbox className='text-sm checkbox-blue' id='filter1' >IndiGo</Checkbox>
              <div className='font-bold text-blue-primary'>₹ 8,239</div>
            </div>
          </div>
          <div className='text-blue-primary'>+ 3 More</div>
        </div>
      </>
    )
  }

  const ModifyFlightSearch = () => {
    return (
      <>
        <div class="grid grid-cols-12 gap-3 pt-4">
          <div className='col-span-2'>
            <div className='p-3 rounded-md cursor-pointer bg-brown-primary'>
              <div className='flex justify-between'>
                <div className='font-bold text-sm text-orange-primary'>Title</div>
                <img className='w-3 mr-3' src={arrowDown} alt='arrow' />
              </div>
              <div className='text-lg text-white'>One Way Trip</div>
            </div>
          </div>
          <div className='col-span-2'>
            <div className='p-3 rounded-md cursor-pointer bg-brown-primary'>
              <div className='flex justify-between'>
                <div className='font-bold text-sm text-orange-primary'>From</div>
                <img className='w-3 mr-3' src={arrowDown} alt='arrow' />
              </div>
              <div className='text-lg text-white'>Bengaluru</div>
            </div>
          </div>
          <div className='col-span-2'>
            <div className='p-3 rounded-md cursor-pointer bg-brown-primary'>
              <div className='flex justify-between'>
                <div className='font-bold text-sm text-orange-primary'>To</div>
                <img className='w-3 mr-3' src={arrowDown} alt='arrow' />
              </div>
              <div className='text-lg text-white'>Bengaluru</div>
            </div>
          </div>
          <div className='col-span-2'>
            <div className='p-3 rounded-md cursor-pointer bg-brown-primary'>
              <div className='flex justify-between'>
                <div className='font-bold text-sm text-orange-primary'>Depart</div>
                <img className='w-3 mr-3' src={arrowDown} alt='arrow' />
              </div>
              <div className='text-lg text-white'>22 Dec, 2023</div>
            </div>
          </div>
          <div className='col-span-2'>
            <div className='p-3 rounded-md cursor-pointer bg-brown-primary'>
              <div className='flex justify-between'>
                <div className='font-bold text-sm text-orange-primary'>Return</div>
                <img className='w-3 mr-3' src={arrowDown} alt='arrow' />
              </div>
              <div className='text-lg text-white'>22 Dec, 2023</div>
            </div>
          </div>
          <div className='col-span-2'>
            <div className='p-3 rounded-md cursor-pointer bg-brown-primary'>
              <div className='flex justify-between'>
                <div className='font-bold text-sm text-orange-primary'>Travellers & Class</div>
                <img className='w-3 mr-3' src={arrowDown} alt='arrow' />
              </div>
              <div className='text-md flex items-baseline text-white'><div className='text-lg'>2</div>{" "}Travellers</div>
            </div>
          </div>
        </div>
        <div className='flex flex-row gap-4 pt-3 justify-between '>
          <div className='bg-grey-400 flex gap-12 items-center px-4 rounded-md'>
            <div className='pr-4 font-bold text-black'>Fare Type</div>
            {travelclass.map(item =>
              <Checkbox className='checkbox-blue' id={item.value} checked={selectedTravelClass === item?.value} onChange={() => handleSubmitTravelClass(item?.value)}>{item?.value}</Checkbox>
            )}
          </div>
          <div className='flex justify-center items-center gap-3 bg-orange-100 text-white w-40 py-2 rounded-md cursor-pointer'>
            <span className='font-bold text-lg'>Search</span>
          </div>
        </div>
      </>
    )
  }

  return (
    <>
      <div className="mb-6 m-auto flex flex-col space-x-0 lg:space-x-4">
        <div className='flight-half-bg h-64'>
          <div className='container mx-auto'>
            <ModifyFlightSearch />
          </div>
        </div>
        <div className='bg-grey-100  ml-0'>
          <div className='container mx-auto grid grid-cols-12 gap-4 -mt-20'>
            <div className='col-span-3 h-screen bg-white rounded-md p-4'>
              <SideFilters />
            </div>
            <div className='col-span-9 min-h-full'>
              <div className='p-4 rounded-t-md bg-white'>
                <div className='text-lg font-bold mb-5'>Flights from Bengaluru to New Delhi</div>
                <div className='grid grid-cols-12'>
                  <div className='col-span-4 flex bg-grey-200 px-4 py-3 cursor-pointer border-orange-primary border-b-2'>
                    <img src={rupee} alt='rupee' className='w-10 mr-3' />
                    <div className='flex flex-col'>
                      <div className='text-md font-bold'>Cheapest</div>
                      <div className='text-md'>3,701 .   Duration: 01 h 55 m</div>
                    </div>
                  </div>
                  <div className='col-span-4 flex px-4 py-3 cursor-pointer border'>
                    <img src={offer} alt='rupee' className='w-10 mr-3' />
                    <div className='flex flex-col'>
                      <div className='text-md font-bold'>Direct Flight</div>
                      <div className='text-md'>3,701 .   Duration: 01 h 55 m</div>
                    </div>
                  </div>
                  <div className='col-span-4 flex px-4 py-3 cursor-pointer border'>
                    <img src={discount} alt='rupee' className='w-10 mr-3' />
                    <div className='flex flex-col'>
                      <div className='text-md font-bold'>You May Prfare</div>
                      <div className='text-md'>3,701 .   Duration: 01 h 55 m</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className='bg-grey-100'>
                <RoundTripFlightList />
              </div>
              <StickyFooter />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default FlightList2;
