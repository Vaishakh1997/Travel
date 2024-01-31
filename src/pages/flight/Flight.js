import React, { useEffect, useMemo, useState } from 'react';
import SectionTitle from '../../components/dashboard/section-title';
import Breadcrumb from '../../components/breadcrumbs';
import { useDispatch, useSelector } from 'react-redux';
import { Button, Checkbox, Popover } from 'antd';
// import { getDashboardStats } from '../../store/actions/dashboardActions';
import searchDarkIcon from '../../assets/flights/search-dark.svg'
import searchLightIcon from '../../assets/flights/search-light.svg'
import { DateRangePicker } from 'react-date-range';
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file
import arrowRight from '../../assets/flights/arrow-right.svg'
import arrowDown from '../../assets/flights/arrow-down.svg'
import swap from '../../assets/flights/ic_swap_flight.svg'
import { Link } from 'react-router-dom';

const Flight = () => {
  const dispatch = useDispatch();

  const { stats, statsLoading } = useSelector((state) => state.dashboard);
  const [isCheckedOneWay, setIsCheckedOneWay] = useState(true);
  const [isCheckedRoundtrip, setIsCheckedRoundtrip] = useState(false);
  const [selectedTravelClass, setSelectedTravelClass] = useState('Any')
  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: new Date() + 1,
      key: 'selection'
    }
  ]);
  const [open, setOpen] = useState(false);
  const [openCalender, setOpenCalender] = useState(false);
  const [count, setCount] = useState(1)

  const hide = () => {
    setOpen(false);
  };

  const hideCalender = () => {
    setOpenCalender(false);
  };

  const handleOpenChange = (newOpen) => {
    setOpen(newOpen);
  };
  const handleOpenCalenderChange = (newOpen) => {
    setOpenCalender(newOpen);
  };

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
      "value": "First"
    }
  ]
  let travelAdult = [
    {
      "selected": true,
      "value": "1"
    },
    {
      "selected": false,
      "value": "2"
    },
    {
      "selected": false,
      "value": "3"
    },
    {
      "selected": false,
      "value": "4"
    },
    {
      "selected": false,
      "value": "5"
    },
    {
      "selected": false,
      "value": "6"
    },
    {
      "selected": false,
      "value": "7"
    },
    {
      "selected": false,
      "value": "8"
    },
    {
      "selected": false,
      "value": "9"
    },
    {
      "selected": false,
      "value": "10"
    }
  ]

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
  const handleSubmitTravelClass = (selectedTravelClass) => {
    if (document.getElementById(selectedTravelClass))
      document.getElementById(selectedTravelClass).checked = true;
    setSelectedTravelClass(selectedTravelClass)
  }

  const fromContent = (
    <div>
      <div className="flex items-cente shadow-sm mb-2 p-2 pl-0">
        <img src={searchDarkIcon} alt='search' className='w-5' />
        <input
          type="text"
          name="city"
          id="city"
          placeholder='From'
          autoComplete="address-level2"
          className="block w-full rounded-md border-0 pl-2 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
        />
      </div>
      <div>
        <div className='flex items-center py-2'>
          <img src={searchLightIcon} alt='search' className='w-5 mr-3' />
          <div className='flex flex-col'>
            <div className='text-md font-bold'>Mumbai, India</div>
            <div className='flex justify-between'>
              <div className='text-sm '>Chhatrapati Shivaji Airport</div>
              <div className='text-md font-bold text-grey-400 ml-8'>BOM</div>
            </div>
          </div>
        </div>
        <div className='flex items-center py-2'>
          <img src={searchLightIcon} alt='search' className='w-5 mr-3' />
          <div className='flex flex-col'>
            <div className='text-md font-bold'>Mumbai, India</div>
            <div className='flex justify-between'>
              <div className='text-sm '>Chhatrapati Shivaji Airport</div>
              <div className='text-md font-bold text-grey-400 ml-8'>BOM</div>
            </div>
          </div>
        </div>
        <div className='flex items-center py-2'>
          <img src={searchLightIcon} alt='search' className='w-5 mr-3' />
          <div className='flex flex-col'>
            <div className='text-md font-bold'>Mumbai, India</div>
            <div className='flex justify-between'>
              <div className='text-sm '>Chhatrapati Shivaji Airport</div>
              <div className='text-md font-bold text-grey-400 ml-8'>BOM</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const toContent = (
    <div>
      <div className="flex items-cente shadow-sm mb-2 p-2 pl-0">
        <img src={searchDarkIcon} alt='search' className='w-5' />
        <input
          type="text"
          name="city"
          id="city"
          placeholder='To'
          autoComplete="address-level2"
          className="block w-full rounded-md border-0 pl-2 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
        />
      </div>
      <div>
        <div className='flex items-center py-2'>
          <img src={searchLightIcon} alt='search' className='w-5 mr-3' />
          <div className='flex flex-col'>
            <div className='text-md font-bold'>Mumbai, India</div>
            <div className='flex justify-between'>
              <div className='text-sm '>Chhatrapati Shivaji Airport</div>
              <div className='text-md font-bold text-grey-400 ml-8'>BOM</div>
            </div>
          </div>
        </div>
        <div className='flex items-center py-2'>
          <img src={searchLightIcon} alt='search' className='w-5 mr-3' />
          <div className='flex flex-col'>
            <div className='text-md font-bold'>Mumbai, India</div>
            <div className='flex justify-between'>
              <div className='text-sm '>Chhatrapati Shivaji Airport</div>
              <div className='text-md font-bold text-grey-400 ml-8'>BOM</div>
            </div>
          </div>
        </div>
        <div className='flex items-center py-2'>
          <img src={searchLightIcon} alt='search' className='w-5 mr-3' />
          <div className='flex flex-col'>
            <div className='text-md font-bold'>Mumbai, India</div>
            <div className='flex justify-between'>
              <div className='text-sm '>Chhatrapati Shivaji Airport</div>
              <div className='text-md font-bold text-grey-400 ml-8'>BOM</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const TravellerGroup = () => {
    return (
      <div className='py-3'>
        <div className='mb-4'>
          <div className='text-md mb-3 font-bold'>CHOOSE TRAVEL CLASS</div>
          <div className='flex gap-3'>
            <span className='text-white bg-orange-500 font-bold text-sm px-3 py-2 rounded-md'>Economy/Premium Economy</span>
            <span className='text-black font-bold text-sm px-3 py-2 rounded-md border'>Premium Economy</span>
            <span className='text-black font-bold text-sm px-3 py-2 rounded-md border'>Business</span>
          </div>
        </div>
        <div className='mb-4'>
          <div className='text-md mb-1 font-bold'>ADULTS ( 12y + )</div>
          <div className='text-sm mb-1 font-bold text-grey-500'>On The day of travel</div>
          <div className='flex gap-0'>
            <div className='flex gap-3'>
              <div className='flex rounded-md overflow-hidden'>
                {travelAdult.map(item =>
                  <span className={`w-12 h-10 m-auto flex justify-center items-center font-bold ${item.selected ? 'bg-blue-primary text-white' : 'bg-grey-300'}`} key={item.value}>{item.value}</span>
                )}
              </div>
              <div className='text-black font-bold text-md px-4 py-2 rounded-md border'>{"> 9"}</div>
            </div>
          </div>
        </div>

        <div className='mb-4'>
          <div className='text-md mb-1 font-bold'>CHILDREN ( 2y - 12y )</div>
          <div className='text-sm mb-1 font-bold text-grey-500'>On The day of travel</div>
          <div className='flex gap-0'>
            <div className='flex gap-3'>
              <div className='flex rounded-md overflow-hidden'>
                {travelAdult.map(item =>
                  <span className={`w-12 h-10 m-auto flex justify-center items-center font-bold ${item.selected ? 'bg-blue-primary text-white' : 'bg-grey-300'}`} key={item.value}>{item.value}</span>
                )}
              </div>
              <div className='text-black font-bold text-md px-4 py-2 rounded-md border'>{"> 9"}</div>
            </div>
          </div>
        </div>
        {/* <div className='mb-4'>
          <div className='text-md mb-1 font-bold'>INFANTS ( Below 2Y )</div>
          <div className='text-sm mb-1 font-bold text-grey-500'>On The day of travel</div>
          <div className='flex gap-0'>
            <div className='flex gap-3'>
              <div className='flex rounded-md overflow-hidden'>
                {travelAdult.map(item =>
                  <span className={`w-12 h-10 m-auto flex justify-center items-center font-bold ${item.selected ? 'bg-blue-primary text-white rounded-md' : 'bg-grey-300'}`} key={item.value}>{item.value}</span>
                )}
              </div>
              <div className='text-black font-bold text-md px-4 py-2 rounded-md border'>{"> 9"}</div>
            </div>
          </div>
        </div> */}
        <div className='flex justify-center'>
          <span className='bg-orange-primary px-10 py-2 text-white text-lg font-bold mb-2 rounded-lg cursor-pointer' onClick={hide}>APPLY</span>
        </div>
      </div>
    )
  }

  const DateContent = () => {
    return (
      <DateRangePicker
        ranges={date}
        months={2}
        direction="horizontal"
        calendarFocus="forwords"
        rangeColors={['#FF4F1A']}
        onChange={item => {
          setDate([item.selection])
          setTimeout(() => {
            setCount(count + 1)
            if (count % 2 === 0)
              hideCalender()
          }, 10);
        }}
        showSelectionPreview={true}
        moveRangeOnFirstSelection={false}
        minDate={new Date()}

        inputRanges={[]}


      />
    )
  }

  return (
    <>
      <div className='flex flex-col mb-3'>
        <ul class="space-y-4 ">
          <Checkbox checked={isCheckedOneWay} onChange={handleChangeOneWay} className='checkbox-blue'>One way</Checkbox>
          <Checkbox checked={isCheckedRoundtrip} onChange={handleChangeRoundtrip} className='checkbox-blue'>Round trip</Checkbox>
        </ul>
        <div class="grid grid-cols-12 gap-3 pt-5">
          <div className='col-span-6'>
            <div className='relative flex flex-row border rounded-md h-24'>
              <Popover placement="bottomLeft" content={fromContent} showArrow={false} trigger={"click"}>
                <div className='border-r w-1/2 p-3 cursor-pointer'>
                  <div className='text-sm text-grey-600'>From</div>
                  <div className='text-lg font-extrabold'>Bengaluru</div>
                  <div className='text-md font-bold'>Bengaluru International Airport</div>
                </div>
              </Popover>
              <img className='absolute right-0 left-0 m-auto top-0 bottom-0 w-6' src={swap} alt="swap" />
              <Popover placement="bottom" content={toContent} showArrow={false} trigger={"click"}>
                <div className=' w-1/2 p-3 pl-5 cursor-pointer'>
                  <div className='text-sm text-grey-600'>To</div>
                  <div className='text-lg font-extrabold'>Bengaluru</div>
                  <div className='text-md font-bold'>Bengaluru International Airport</div>
                </div>
              </Popover>
            </div>
          </div>
          <div className='col-span-4'>
            <Popover placement="bottom" content={DateContent} showArrow={false} trigger={"click"} open={openCalender} onOpenChange={handleOpenCalenderChange}>
              <div className='flex flex-row border rounded-md h-24 cursor-pointer'>
                <div className='border-r w-1/2 p-3'>
                  <div className='flex'>
                    <div className='text-sm text-grey-600'>Depart</div>
                    <img className='w-4 ml-3' src={arrowDown} alt='arrow' />
                  </div>
                  <div className='text-lg font-bold'>22 Dec, 2023</div>
                  <div className='text-md font-bold'>Sunday</div>
                </div>
                {
                  isCheckedOneWay ?
                    <div className=' w-1/2 p-3'>
                      <div className='flex'>
                        <div className='text-sm text-grey-600'>Return</div>
                        <img className='w-4 ml-3' src={arrowDown} alt='arrow' />
                      </div>
                      <div className='text-md font-bold text-grey-400'>Please select/Add return date for Round trip</div>
                    </div> :
                    <div className=' w-1/2 p-3'>
                      <div className='flex'>
                        <div className='text-sm text-grey-600'>Return</div>
                        <img className='w-4 ml-3' src={arrowDown} alt='arrow' />
                      </div>
                      <div className='text-lg font-bold'>22 Dec, 2023</div>
                      <div className='text-md font-bold'>Sunday</div>
                    </div>
                }
              </div>
            </Popover>
          </div>
          <div className='col-span-2'>
            <Popover placement="bottomLeft" content={TravellerGroup} showArrow={false} trigger={"click"} open={open} onOpenChange={handleOpenChange}>
              <div className='border p-3 rounded-md h-24 cursor-pointer'>
                <div className='flex'>
                  <div className='text-sm text-grey-600'>Travellers & Class</div>
                  <img className='w-4 ml-3' src={arrowDown} alt='arrow' />
                </div>
                <div className='text-md flex items-baseline'><div className='text-lg font-bold'>2</div>{" "}Travellers</div>
                <div className='text-md font-bold'>Economy</div>
              </div>
            </Popover >
          </div>
        </div>
        <div className='pt-5'>
          <div className='font-bold'>Fare Type</div>
          <ul class="pt-3">
            {travelclass.map(item =>
              <Checkbox className='checkbox-blue' id={item.value} checked={selectedTravelClass === item?.value} onChange={() => handleSubmitTravelClass(item?.value)}>{item?.value}</Checkbox>
            )}
          </ul>
        </div>
        <div className='mt-8'>
          <Link to={isCheckedOneWay ? '/flight-list-1' : '/flight-list-2'}>
            <div className='flex justify-center items-center gap-3 bg-orange-primary text-white px-4 py-3 rounded-md absolute left-0 right-0 bottom-10 mx-auto w-56'>
              <span className='font-bold text-lg'>Search Flights</span>
              <img src={arrowRight} alt='arrow' />
            </div>
          </Link>
        </div>
      </div>
    </>
  );
};
export default Flight;
