import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import SeatPicker from "react-seat-picker"
import { getDashboardStats } from '../../store/actions/dashboardActions';
import { Checkbox, Modal, Tabs } from 'antd';
import flightCompanyLogo from '../../assets/flights/flight-company.png'
import verticalLine from '../../assets/flights/vertical-line.svg'
import luggage from '../../assets/flights/luggage.png'
import addSquare from '../../assets/flights/add-square.svg'
import flightCircle from '../../assets/flights/flight-circle.png'
import upgrade from '../../assets/flights/upgrade.png'
import userHectagon from '../../assets/flights/user-octagon.svg'
import arrowRight from '../../assets/flights/arrow-right.svg'
import seats from '../../assets/flights/seats.png'
import meals from '../../assets/flights/meals.png'
import meal from '../../assets/flights/meal.png'
import arch from '../../assets/flights/arch.svg'
import union from '../../assets/flights/flight-union.svg'
import exit from '../../assets/flights/exit.png'
import { Link } from 'react-router-dom';
import { FaEdit } from "react-icons/fa";
import { CiCircleInfo, CiCirclePlus, CiCircleMinus } from "react-icons/ci";
import { IoIosArrowDown, IoIosArrowUp, IoIosArrowDropleft, IoIosArrowDropright } from "react-icons/io";

const FlightBooking = (props) => {
  const dispatch = useDispatch();

  const [isBaggageModalVisible, setIsBaggageModalVisible] = useState(false);
  const [isReviewModalVisible, setIsReviewModalVisible] = useState(false);

  const rows = [
    [
      { number: "XL", isReserved: true, id: 1 },
      { number: 2, id: 2 },
      { number: 3, id: 3 },
    ],
    [
      { number: "", id: 1 },
      { number: 2, id: 2 },
      { number: 3, id: 3 },
    ],
    [
      { number: 1, id: 1 },
      { number: 2, id: 2 },
      { number: 3, id: 3 },
    ],
    [
      { number: 1, id: 1 },
      { number: 2, id: 2 },
      { number: 3, id: 3 },
    ],
    [
      { number: 1, id: 1 },
      { number: 2, id: 2 },
      { number: 3, id: 3 },
    ],
    [
      { number: 1, id: 1 },
      { number: 2, id: 2 },
      { number: 3, id: 3 },
    ],
    [
      { number: 1, id: 1 },
      { number: 2, id: 2 },
      { number: 3, id: 3 },
    ],
    [
      { number: 1, id: 1 },
      { number: 2, id: 2 },
      { number: 3, id: 3 },
    ],
    [
      { number: 1, id: 1 },
      { number: 2, id: 2 },
      { number: 3, id: 3 },
    ],
  ];

  const addSeatCallback = (row, number, id, addCb) => {
    console.log(`Added seat ${number}, row ${row}, id ${id}`);
  };

  useEffect(() => {
    dispatch(getDashboardStats());
    dispatch({
      type: 'SET_PALETTE',
      palette: {
        header: 'navbar2'
      }
    })
  }, []); // eslint-disable-line

  const ReviewDetailsModal = () => {
    return (
      <>
        <Modal
          // title="File Added"
          visible={isReviewModalVisible}
          onOk={() => setIsReviewModalVisible(false)}
          onCancel={() => setIsReviewModalVisible(false)}
          footer={false}
          width={700}
        >
          <div>
            <div className='font-bold text-lg text-black text-center mb-5'>Review Details</div>
            <div className='font-md mb-5 text-center'>Please ensure that the spelling of your name and other details match with your travel document/govt. ID, as these cannot be changed later. Errors might lead to cancellation penalties.</div>
            <div className='border p-4 mb-6'>
              <div className='font-bold text-lg text-black mb-4'>Adult 1</div>
              <div className='flex flex-col mb-4'>
                <div className='font-md mb-1'>First & Middle Name</div>
                <div className='font-md font-bold'>Vinayak</div>
              </div>
              <div className='flex flex-col mb-4'>
                <div className='font-md mb-1'>Last Name</div>
                <div className='font-md font-bold'>Hegde</div>
              </div>
              <div className='flex flex-col'>
                <div className='font-md mb-1'>Gender</div>
                <div className='font-md font-bold'>Male</div>
              </div>
            </div>
            <div className='flex justify-end mt-5'>
              <div className='flex justify-center justify-self-end items-center gap-3 px-4 py-2 rounded-md w-32 cursor-pointer border border-grey-400 mr-5'>
                <span className='font-bold text-lg'>Edit</span>
                <FaEdit size={18} className='text-orange-primary ml-l' />
              </div>
              <div onClick={() => setIsReviewModalVisible(false)} className='flex justify-center justify-self-end items-center gap-3 bg-orange-primary text-white px-4 py-2 rounded-md w-32 cursor-pointer'>
                <span className='font-bold text-lg'>Confirm</span>
                <img src={arrowRight} alt='arrow' />
              </div>
            </div>
          </div>
        </Modal></>
    )
  }

  const BaggageModal = () => {
    return (
      <>
        <Modal
          // title="File Added"
          visible={isBaggageModalVisible}
          onOk={() => setIsBaggageModalVisible(false)}
          onCancel={() => setIsBaggageModalVisible(false)}
          footer={false}
          width={700}
        >
          <div>
            <div className='font-bold text-lg text-black mb-5'>Add Extra Baggage</div>
            <div className='grid grid-cols-12 gap-4'>
              <div className='col-span-5 bg-blue-primary flex items-center px-4 rounded-md text-white py-3 cursor-pointer'>
                <img src={flightCircle} alt='rupee' className='w-6 mr-3 border rounded-full' />
                <div className='flex flex-col'>
                  <div className='text-md font-bold'>Bengaluru - New Delhi</div>
                  <div className='text-md'>Selection pending</div>
                </div>
              </div>
              <div className='col-span-5 border flex items-center px-4 rounded-md text-black py-3 cursor-pointer'>
                <img src={flightCircle} alt='rupee' className='w-6 mr-3 border rounded-full' />
                <div className='flex flex-col'>
                  <div className='text-md font-bold'>New Delhi - Bengaluru</div>
                  <div className='text-md'>Selection pending</div>
                </div>
              </div>
            </div>
            <div className='text-md text-black mt-5 mb-6'>Included Check-in baggage per person - <span className='font-bold text-green-primary'>15 KGS</span></div>

            <div>
              <div className='flex justify-between my-4'>
                <div className='flex items-center'>
                  <img src={luggage} alt='luggage' className='w-8 mr-3' />
                  <span className='text-md text-black'>Additional 3 KG</span>
                </div>
                <div className='flex items-center'>
                  <div className='font-bold text-md mr-4'>₹ 1,350</div>
                  <span className='text-md bg-white border cursor-pointer items-center border-grey-400 text-grey-600 px-3 py-1 rounded-md ml-4 flex w-24 justify-end' >Add
                    <CiCirclePlus size={18} className='ml-2' />
                  </span>
                </div>
              </div>
              <div className='flex justify-between my-4'>
                <div className='flex items-center'>
                  <img src={luggage} alt='luggage' className='w-8 mr-3' />
                  <span className='text-md text-black'>Additional 5 KG</span>
                </div>
                <div className='flex items-center'>
                  <div className='font-bold text-md mr-4'>₹ 3,350</div>
                  <span className='text-md bg-white border cursor-pointer items-center border-grey-400 text-grey-600 px-3 py-1 rounded-md ml-4 flex w-24 justify-end' >Add
                    <CiCirclePlus size={18} className='ml-2' />
                  </span>
                </div>
              </div>
              <div className='flex justify-between my-4'>
                <div className='flex items-center'>
                  <img src={luggage} alt='luggage' className='w-8 mr-3' />
                  <span className='text-md text-black'>Additional 10 KG</span>
                </div>
                <div className='flex items-center'>
                  <div className='font-bold text-md mr-4'>₹ 3,350</div>
                  <span className='text-md bg-white border cursor-pointer items-center border-grey-400 text-grey-600 px-3 py-1 rounded-md ml-4 flex w-24 justify-end' >Add
                    <CiCirclePlus size={18} className='ml-2' />
                  </span>
                </div>
              </div>
              <div className='flex justify-between my-4'>
                <div className='flex items-center'>
                  <img src={luggage} alt='luggage' className='w-8 mr-3' />
                  <span className='text-md text-black'>Additional 15 KG</span>
                </div>
                <div className='flex items-center'>
                  <div className='font-bold text-md mr-4'>₹ 3,350</div>
                  <span className='text-md bg-white border cursor-pointer items-center border-grey-400 text-grey-600 px-3 py-1 rounded-md ml-4 flex w-24 justify-end' >Add
                    <CiCirclePlus size={18} className='ml-2' />
                  </span>
                </div>
              </div>
              <div className='flex justify-between my-4'>
                <div className='flex items-center'>
                  <img src={luggage} alt='luggage' className='w-8 mr-3' />
                  <span className='text-md text-black'>Additional 3 KG</span>
                </div>
                <div className='flex items-center'>
                  <div className='font-bold text-md mr-4'>₹ 1,350</div>
                  <span className='text-md bg-white border cursor-pointer items-center border-grey-400 text-grey-600 px-3 py-1 rounded-md ml-4 flex w-24 justify-end' >1
                    <CiCircleMinus size={18} className='text-orange-primary ml-2' />
                  </span>
                </div>
              </div>
            </div>

            <div className='mt-4 border-t pt-4'>
              <div className='flex justify-between '>
                <div className='flex flex-col items-start'>
                  <span className='text-md text-black'>Additional 3 KG</span>
                  <span className='text-md text-black'>Baggage Selected</span>
                </div>
                <div className='flex items-center'>
                  <div className='flex flex-col items-end'>
                    <div className='text-sm mr-4'>Added to fare</div>
                    <div className='font-bold text-lg mr-4'>₹ 1,350</div>
                  </div>

                  <div onClick={() => setIsBaggageModalVisible(false)} className='flex justify-center justify-self-end items-center gap-3 bg-orange-primary text-white px-4 py-2 rounded-md w-32 cursor-pointer'>
                    <span className='font-bold text-lg'>Add</span>
                    <img src={arrowRight} alt='arrow' />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Modal>
      </>
    )
  }

  const FlightDetail = () => {
    return (
      <div className='p-4 rounded-t-md bg-white'>
        <div className='flex items-center justify-between mb-5'>
          <div className='text-lg font-extrabold'>Bengaluru → New Delhi</div>
          <span className='bg-green-primary rounded-md px-3 py-1 text-white text-md font-bold'>Cancelation fees apply</span>
        </div>

        <div className='flex items-center justify-between mb-8'>
          <div>
            <span className='bg-orange-50 rounded-md px-3 py-1 text-black text-md font-bold'>Saturday, Dec 9</span>
            <span className='text-grey-600 pl-4'>1 Stop · 7h 25m</span>
          </div>
          <div className='text-md font-bold text-blue-primary'>View fare rules</div>
        </div>

        <div className='flex justify-between items-center'>
          <div className='flex items-center'>
            <img src={flightCompanyLogo} alt='logo' className='w-8 p-1' />
            <div className='text-lg font-bold pl-2'>Air India Express</div>
            <span className='text-grey-600 pl-4'>1 Stop · 7h 25m</span>
            <span className='font-bold text-md bg-white border border-grey-400 text-grey-600 px-3 p1-2 rounded-md ml-4' >Lock Price</span>

          </div>
          <div className='flex items-center'>
            <div className='text-md text-grey-600 pr-2'>Economy {"> "}
              <span className='text-orange-500 font-bold'>Xpress Value</span>
            </div>
            <CiCircleInfo />
          </div>
        </div>

        <div className='bg-blue-50 rounded-md  mt-4'>
          <div className='flex p-3'>
            <div className='flex flex-col justify-between'>
              <div className='text-lg font-bold text-black'>12:25</div>
              <div className='text-lg font-bold text-black'>12:25</div>
            </div>
            <div>
              <img src={verticalLine} alt='logo' className='w-5 p-1 mx-4' />
            </div>
            <div className='flex flex-col justify-between'>
              <div className='text-md text-grey-600'><span className='font-bold text-black text-md'>Bengaluru.</span> Bengaluru International Airport, Terminal 2</div>
              <div className='text-lg font-bold text-blue-primary'>1h 20m</div>
              <div className='text-md text-grey-600'><span className='font-bold text-black text-md'>Bengaluru.</span> Bengaluru International Airport, Terminal 2</div>
            </div>
          </div>
          <div className='flex p-2 bg-blue-100 overflow-hidden rounded-b-md'>
            <div className='text-md border-r border-orange-primary px-3'>Baggage - <span className='font-bold'>ADULT</span></div>
            <div className='text-md border-r border-orange-primary px-3'>Check-in - <span className='font-bold'> 15 Kgs per Person</span></div>
            <div className='text-md px-3'>Cabin  - <span className='font-bold'>7 Kgs (1 piece only)</span></div>
          </div>
        </div>

        <div className='text-lg font-bold my-6'>
          Change of planes - <span className='text-orange-primary'>3h 20m Layover in Goa - Dabolim Airport</span>
        </div>

        <div className='bg-blue-50 rounded-md  mt-4'>
          <div className='flex p-3'>
            <div className='flex flex-col justify-between'>
              <div className='text-lg font-bold text-black'>12:25</div>
              <div className='text-lg font-bold text-black'>12:25</div>
            </div>
            <div>
              <img src={verticalLine} alt='logo' className='w-5 p-1 mx-4' />
            </div>
            <div className='flex flex-col justify-between'>
              <div className='text-md text-grey-600'><span className='font-bold text-black text-md'>Bengaluru.</span> Bengaluru International Airport, Terminal 2</div>
              <div className='text-lg font-bold text-blue-primary'>1h 20m</div>
              <div className='text-md text-grey-600'><span className='font-bold text-black text-md'>Bengaluru.</span> Bengaluru International Airport, Terminal 2</div>
            </div>
          </div>
          <div className='flex p-2 bg-blue-100 overflow-hidden rounded-b-md'>
            <div className='text-md border-r border-orange-primary px-3'>Baggage - <span className='font-bold'>ADULT</span></div>
            <div className='text-md border-r border-orange-primary px-3'>Check-in - <span className='font-bold'> 15 Kgs per Person</span></div>
            <div className='text-md px-3'>Cabin  - <span className='font-bold'>7 Kgs (1 piece only)</span></div>
          </div>
        </div>

        <div className='flex items-center justify-between mt-6 mb-8'>
          <div className='flex items-center bg-orange-50 p-3 rounded-md w-10/12'>
            <img src={luggage} alt='luggage' className='w-6 mr-3' />
            <span className='font-bold text-md text-black'>Got excess baggage? Don’t stress, buy extra check-in baggage allowance for BLR-DEL at fab rates!</span>
          </div>
          <span onClick={() => setIsBaggageModalVisible(!isBaggageModalVisible)} className='cursor-pointer font-bold text-lg bg-white border border-grey-400 text-grey-600 px-3 py-2 rounded-md ml-4 flex w-2/12 justify-center' >Add
            <img src={addSquare} alt='sqaure' className='w-6 ml-2' />
          </span>
          <BaggageModal />
        </div>

        <div className='rounded-md bg-grey-200 p-3'>
          <div className='font-bold text-lg text-black'>Cancellation Refund Policy</div>
          <div className='flex items-center mt-3 mb-5'>
            <div className='flex items-center'>
              <img src={flightCircle} alt='luggage' className='w-5 mr-3' />
              <span className='font-bold text-md text-black'>BLR</span>
            </div>
            <div className='text-grey-600 mx-4'>--</div>
            <div className='flex items-center'>
              <img src={flightCircle} alt='luggage' className='w-5 mr-3' />
              <span className='font-bold text-md text-black'>DEL</span>
            </div>
          </div>
          <div className='flex items-center gap-4'>
            <div className='w-3/12 flex flex-col '>
              <div className='text-md font-bold'>Cancellation Penalty</div>
              <div className='w-full rounded-md bg-grey-500 h-2 my-2'></div>
              <div className='text-md font-bold'>Cancel Between (IST)</div>
            </div>
            <div className='w-9/12 flex flex-col'>
              <div className='flex justify-around'>
                <div className='text-md font-bold'>₹ 3,800</div>
                <div className='text-md font-bold'>₹ 7,027</div>
              </div>
              <div className='w-full rounded-md h-2 my-2' style={{ background: 'linear-gradient(270deg, #FF4D1F -0.62%, #05D35D 102.49%)' }}></div>
              <div className='flex justify-between'>
                <div className='text-md font-bold'>Now</div>
                <div className='text-md font-bold'>9 Dec</div>
                <div className='text-md font-bold'>10 Dec</div>
              </div>
            </div>
          </div>
          <div className='flex items-center justify-between mt-6'>
            <div className='flex items-center bg-grey-400 p-3 rounded-md w-10/12'>
              <img src={upgrade} alt='luggage' className='w-6 mr-3' />
              <span className='font-bold text-md text-black'>Got excess baggage? Don’t stress, buy extra check-in baggage allowance for BLR-DEL at fab rates!</span>
            </div>
            <span className='font-bold text-lg bg-transperent border border-grey-400 text-grey-600 px-3 py-2 rounded-md ml-4 flex w-2/12 justify-center' >Upgrade
            </span>
          </div>
        </div>
      </div>
    )
  }

  const TravelDetail = () => {
    return (
      <div className='p-4 rounded-t-md bg-white mt-5'>
        <div className='font-bold text-lg text-black'>Traveller Details</div>
        <div className='flex items-center mt-5'>
          <img src={userHectagon} alt='luggage' className='w-5 mr-3' />
          <span className='font-bold text-md text-black'>ADULT (12 yrs+)</span>
        </div>
        <div className='flex mt-4'>
          <Checkbox className='checkbox-orange mr-4' checked ><span className='text-md font-bold'>Adult 1</span></Checkbox>
          <Checkbox className='checkbox-blue mr-3' >Male</Checkbox>
          <Checkbox className='checkbox-blue' >Female</Checkbox>
        </div>
        <div className='flex mt-4 gap-4'>
          <div className='w-1/3'>
            <label className='font-bold'>First Name</label>
            <input
              type="text"
              name="First Name"
              id="FirstName"
              placeholder='First Name'
              autoComplete="First Name"
              className="h-10 block w-full rounded-md border pl-2 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6"
            />
          </div>
          <div className='w-1/3'>
            <label className='font-bold'>Last Name</label>
            <input
              type="text"
              name="Last Name"
              id="LastName"
              placeholder='Last Name'
              autoComplete="Last Name"
              className="h-10 block w-full rounded-md border pl-2 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6"
            />
          </div>

        </div>
        <div className='mt-6'>
          <Checkbox className='checkbox-orange mr-4' ><span className='text-md font-bold'>I require wheelchair (Optional)</span></Checkbox>
        </div>

        <div className='flex items-center justify-between mt-5 mb-3'>
          <span className='text-md text-black'>Log in to view your <span className='font-bold'>saved traveller list</span>
            <span className='text-md font-bold text-blue-primary ml-6'>Login Now</span>
          </span>

          <span className='font-bold text-lg bg-white border border-grey-400 text-grey-600 px-3 py-2 rounded-md ml-4 flex w-1/4 justify-center cursor-pointer' >Add New Adult
            <img src={addSquare} alt='sqaure' className='w-6 ml-2' />
          </span>
        </div>
      </div>
    )
  }

  const BookingDetail = () => {
    return (
      <div className='p-4 rounded-t-md bg-white mt-5'>
        <div className='font-bold text-lg text-black'>Booking details</div>

        <div className='flex mt-4 gap-4'>
          <div className='w-1/3'>
            <label className='font-bold'>Country Code</label>
            <input
              type="text"
              name="Country Code"
              id="CountryCode"
              placeholder='Country Code'
              autoComplete="Country Code"
              className="h-10 block w-full rounded-md border pl-2 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6"
            />
          </div>
          <div className='w-1/3'>
            <label className='font-bold'>Mobile No</label>
            <input
              type="text"
              name="Mobile No"
              id="MobileNo"
              placeholder='Mobile No'
              autoComplete="Mobile No"
              className="h-10 block w-full rounded-md border pl-2 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6"
            />
          </div>
          <div className='w-1/3'>
            <label className='font-bold'>Email</label>
            <input
              type="text"
              name="Email"
              id="Email"
              placeholder='Email'
              autoComplete="Email"
              className="h-10 block w-full rounded-md border pl-2 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6"
            />
          </div>

        </div>
        <div className='mt-6'>
          <Checkbox className='checkbox-orange mr-4' checked><span className='text-md font-bold'>I have a GST number (Optional)</span></Checkbox>
          <div className='text-sm text-grey-600 mt-2'>
            Note: Booking details will be sent to the provided contact information. Please ensure that the mobile number and email ID are functional
          </div>
        </div>

        <div className='font-bold text-lg text-black mt-8'>PIN code and State</div>
        <div className='flex mt-4 gap-4'>
          <div className='w-1/3'>
            <label className='font-bold'>Pincode</label>
            <input
              type="text"
              name="Pincode"
              id="Pincode"
              placeholder='Pincode'
              autoComplete="Pincode"
              className="h-10 block w-full rounded-md border pl-2 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6"
            />
          </div>
          <div className='w-1/3'>
            <label className='font-bold'>State</label>
            <input
              type="text"
              name="State"
              id="State"
              placeholder='State'
              autoComplete="State"
              className="h-10 block w-full rounded-md border pl-2 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6"
            />
          </div>
          <div className='w-1/3'>
            <label className='font-bold'>Address</label>
            <input
              type="text"
              name="Address"
              id="Address"
              placeholder='Address'
              autoComplete="Address"
              className="h-10 block w-full rounded-md border pl-2 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6"
            />
          </div>
        </div>

        <div className='mt-6'>
          <Checkbox className='checkbox-orange mr-4' checked><span className='text-md font-bold'>I have a GST number (Optional)</span></Checkbox>
          <div className='text-sm text-grey-600 mt-2'>
            Note: Booking details will be sent to the provided contact information. Please ensure that the mobile number and email ID are functional
          </div>
        </div>
      </div>
    )
  }

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

  const SeatAndMealsDetail = () => {
    const items = [
      {
        key: '1',
        label: <div className='flex text-md font-bold items-center'><img src={seats} alt='name' className='mr-2' />Seats</div>,
        children: <SeatDetail />,
      },
      {
        key: '2',
        label: <div className='flex text-md font-bold items-center'><img src={meals} alt='name' className='mr-2' />Meals</div>,
        children: <MealDetail />,
      }
    ];

    return (
      <div className='bg-white rounded-md p-4 h-auto mt-5'>
        <Tabs defaultActiveKey="1" items={items} />
      </div>
    )
  }

  const SeatDetail = () => {
    return (
      <div>
        <div className='bg-orange-50 rounded-md p-1 w-fit'>Less than 48 hours left to departure. Pre-book your preferred seat now before they run out!</div>
        <hr className='mt-5 mb-5' />
        <div className='mb-5'>
          <div className='font-bold text-lg mb-2'>Bengaluru → Goa - Dabolim Airport</div>
          <div className='font-bold text-md text-grey-500'>1 of 1 Seat(s) Selected</div>
        </div>
        <div className='flex items-center'>
          <div className='flex w-1/3 flex-col mb-2'>
            <div className='flex items-center mb-2'>
              <span className='w-8 h-8 bg-green-200 rounded-md'></span>
              <span className='text-md ml-2'>Free</span>
            </div>
            <div className='flex items-center mb-2'>
              <span className='w-8 h-8 bg-orange-200 rounded-md'></span>
              <span className='text-md ml-2'>₹200-600</span>
            </div>
            <div className='flex items-center mb-2'>
              <span className='w-8 h-8 bg-orange-primary rounded-md'></span>
              <span className='text-md ml-2'>₹700-1400</span>
            </div>
            <div className='flex items-center mb-2'>
              <span className='w-8 h-8 bg-blue-300 rounded-md'></span>
              <span className='text-md ml-2'>Exit Row Seats</span>
            </div>
            <div className='flex items-center mb-2'>
              <span className='w-8 h-8 border border-grey-500 border-b-8  rounded-md'></span>
              <span className='text-md ml-2'>Non Reclining</span>
            </div>
            <div className='flex items-center mb-2'>
              <span className='w-8 h-8 border border-grey-500 rounded-md grid place-items-center font-bold'>XL</span>
              <span className='text-md ml-2'>Non Reclining</span>
            </div>
          </div>
          <div className='h-auto bg-no-repeat bg-top w-3/4 mb-10' style={{ backgroundImage: `url(${arch})` }}>
            <div className='mx-auto p-4'>
              <img src={union} className='mx-auto mt-40 mb-4' alt='union' />

              <div className='flex justify-around mx-auto w-full mb-8 mt-6'>
                <div className='flex flex-col'>
                  <img src={exit} alt='name' className='w-10 mb-2 bg-grey-300 p-2 rounded-sm' />
                  <div className='text-red-500 text-md flex items-center font-bold border-red-500 border-l-2 pl-2'>Exit</div>
                </div>
                <div className='flex flex-col items-end'>
                  <img src={exit} alt='name' className='w-10 mb-2 bg-grey-300 p-2 rounded-sm' />
                  <div className='text-red-500 text-md flex items-center justify-end font-bold border-red-500 border-r-2 pr-2'>Exit</div>
                </div>
              </div>

              <div className='flex justify-around gap-4 mx-auto w-3/4'>
                <div className='flex items-start'>
                  <div>
                    {[1, 2, 3, 4, 5, 6, 7, 8, 9].map(item => <div className='w-10 h-10 grid place-items-center font-bold mb-2'>{item}</div>)}
                  </div>
                  <SeatPicker
                    rows={rows}
                    continuous
                    maxReservableSeats={7}
                    visible
                    addSeatCallback={addSeatCallback}
                  />
                </div>
                <div className='flex flex-row-reverse items-start'>
                  <div>
                    {[1, 2, 3, 4, 5, 6, 7, 8, 9].map(item => <div className='w-10 h-10 grid place-items-center font-bold mb-2'>{item}</div>)}
                  </div>
                  <SeatPicker
                    rows={rows}
                    continuous
                    maxReservableSeats={7}
                    visible
                    addSeatCallback={addSeatCallback}
                  />
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    )
  }

  const MealDetail = () => {
    return (
      <div>
        <div className='bg-orange-50 rounded-md p-1 w-fit'>Less than 48 hours left to departure. Pre-book your preferred seat now before they run out!</div>
        <hr className='mt-5 mb-5' />
        <div className='mb-5'>
          <div className='font-bold text-lg mb-2'>Bengaluru → Goa - Dabolim Airport</div>
          <div className='font-bold text-md text-grey-500'>1 of 1 Seat(s) Selected</div>
        </div>
        <div>
          <div className='flex justify-between my-4'>
            <div className='flex items-center'>
              <img src={meal} alt='luggage' className='w-12 mr-3' />
              <div className='flex flex-col'>
                <span className='text-md text-grey-600 mb-1'>Tandoori Chicken tangri with chicken haryali tikka & vegetable shami kebab</span>
                <span className='text-md text-black font-bold'>₹ 560</span>
              </div>
            </div>
            <div className='flex items-center'>

              <span className='text-md bg-white border cursor-pointer items-center border-grey-400 text-grey-600 px-3 py-1 rounded-md ml-4 flex w-24 justify-end' >Add
                <CiCirclePlus size={18} className='ml-2' />
              </span>
            </div>
          </div>
          <div className='flex justify-between my-4'>
            <div className='flex items-center'>
              <img src={meal} alt='luggage' className='w-12 mr-3' />
              <div className='flex flex-col'>
                <span className='text-md text-grey-600 mb-1'>Tandoori Chicken tangri with chicken haryali tikka & vegetable shami kebab</span>
                <span className='text-md text-black font-bold'>₹ 560</span>
              </div>
            </div>
            <div className='flex items-center'>
              <span className='text-md bg-white border cursor-pointer items-center border-grey-400 text-grey-600 px-3 py-1 rounded-md ml-4 flex w-24 justify-end' >Add
                <CiCirclePlus size={18} className='ml-2' />
              </span>
            </div>
          </div>
          <div className='flex justify-between my-4'>
            <div className='flex items-center'>
              <img src={meal} alt='luggage' className='w-12 mr-3' />
              <div className='flex flex-col'>
                <span className='text-md text-grey-600 mb-1'>Tandoori Chicken tangri with chicken haryali tikka & vegetable shami kebab</span>
                <span className='text-md text-black font-bold'>₹ 560</span>
              </div>
            </div>
            <div className='flex items-center'>
              <span className='text-md bg-white border cursor-pointer items-center border-grey-400 text-grey-600 px-3 py-1 rounded-md ml-4 flex w-24 justify-end' >Add
                <CiCirclePlus size={18} className='ml-2' />
              </span>
            </div>
          </div>
          <div className='flex justify-between my-4'>
            <div className='flex items-center'>
              <img src={meal} alt='luggage' className='w-12 mr-3' />
              <div className='flex flex-col'>
                <span className='text-md text-grey-600 mb-1'>Tandoori Chicken tangri with chicken haryali tikka & vegetable shami kebab</span>
                <span className='text-md text-black font-bold'>₹ 560</span>
              </div>
            </div>
            <div className='flex items-center'>
              <span className='text-md bg-white border cursor-pointer items-center border-grey-400 text-grey-600 px-3 py-1 rounded-md ml-4 flex w-24 justify-end' >Add
                <CiCirclePlus size={18} className='ml-2' />
              </span>
            </div>
          </div>
          <div className='flex justify-between my-4'>
            <div className='flex items-center'>
              <img src={meal} alt='luggage' className='w-12 mr-3' />
              <div className='flex flex-col'>
                <span className='text-md text-grey-600 mb-1'>Tandoori Chicken tangri with chicken haryali tikka & vegetable shami kebab</span>
                <span className='text-md text-black font-bold'>₹ 560</span>
              </div>
            </div>
            <div className='flex items-center'>
              <span className='text-md bg-white border cursor-pointer items-center border-grey-400 text-grey-600 px-3 py-1 rounded-md ml-4 flex w-24 justify-end' >1
                <CiCircleMinus size={18} className='text-orange-primary ml-2' />
              </span>
            </div>
          </div>
        </div>

      </div>
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
              <FlightDetail />
              <TravelDetail />
              <BookingDetail />

              <div className='flex justify-end mt-5'>
                <div onClick={() => setIsReviewModalVisible(true)} className='flex justify-center justify-self-end items-center gap-3 bg-orange-primary text-white px-4 py-3 rounded-md  cursor-pointer'>
                  <span className='font-bold text-lg'>Add Seats & Meals</span>
                  <img src={arrowRight} alt='arrow' />
                </div>
                <ReviewDetailsModal />
              </div>

              <SeatAndMealsDetail />

              <div className='flex justify-end mt-5'>
                <Link to='/flight-payment'>
                  <div className='flex justify-center justify-self-end items-center gap-3 bg-orange-primary text-white px-4 py-3 rounded-md  cursor-pointer'>
                    <span className='font-bold text-lg'>Continue</span>
                    <img src={arrowRight} alt='arrow' />
                  </div>
                </Link>
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



export default FlightBooking;
