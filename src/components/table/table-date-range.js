import React, { useState } from 'react';
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { DateRangePicker } from 'react-date-range';
import { dateFormat } from '../../utils/dateFormat';
import { Button, Popover, Tooltip } from 'antd';
import { BiCalendar } from 'react-icons/bi';
import moment from 'moment';
import { BiX } from 'react-icons/bi';

function Index({ datePickerHandler, title = 'Filter by Date' }) {
  const dateRangeInitialValue = {
    startDate: new Date(),
    endDate: new Date(),
    key: 'selection',
  };
  const [isDatePickerVisible, setIsDatePickerVisible] = useState(false);
  const [isFilterActive, setIsFilterActive] = useState(false);
  const [dateRangeOptions, setDateRangeOptions] = useState(
    dateRangeInitialValue
  );
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const handleSelect = (ranges) => {
    setDateRangeOptions(ranges.selection);
  };
  const dateHandler = () => {
    const { startDate, endDate } = dateRangeOptions;
    setIsDatePickerVisible(!isDatePickerVisible);
    if (startDate && endDate) {
      setIsFilterActive(true);
    } else {
      setIsFilterActive(false);
    }
    setStartDate(dateRangeOptions.startDate);
    setEndDate(dateRangeOptions.endDate);
    datePickerHandler({
      startDate: moment(startDate).format('YYYY-MM-DD'),
      endDate: moment(endDate).format('YYYY-MM-DD'),
    });
  };
  const resetFilter = () => {
    setIsFilterActive(false);
    setIsDatePickerVisible(false);
    datePickerHandler({
      startDate: '',
      endDate: '',
    });
    setDateRangeOptions(dateRangeInitialValue);
  };
  const cancelDateHandler = () => {
    setIsDatePickerVisible(false);
    setDateRangeOptions({ ...dateRangeInitialValue, startDate, endDate });
  };

  const content = (
    <div className="flex flex-col col-span-3 mx-auto mt-2 transition duration-5000 ease-in">
      <DateRangePicker
        ranges={[dateRangeOptions]}
        maxDate={new Date()}
        months={2}
        direction="horizontal"
        calendarFocus="backwards"
        preventSnapRefocus={true}
        showSelectionPreview={true}
        moveRangeOnFirstSelection={false}
        rangeColors={['#22C55E']}
        onChange={handleSelect}
      />
      <div className="flex justify-between">
        <div className="order-first">
          {isFilterActive && (
            <Button className="w-64 mr-4" type="primary" onClick={resetFilter}>
              Reset Filter
            </Button>
          )}
        </div>
        <div className="order-last">
          <Button
            size="large"
            className="w-64 mr-4"
            onClick={cancelDateHandler}
          >
            Cancel
          </Button>
          <Button
            size="large"
            type="success"
            className="w-64 mr-4"
            onClick={dateHandler}
          >
            Apply
          </Button>
        </div>
      </div>
    </div>
  );
  return (
    <Popover
      content={content}
      trigger="click"
      visible={isDatePickerVisible}
      className="flex justify-center items-center"
      onClick={() => setIsDatePickerVisible(true)}
      onVisibleChange={() => setIsDatePickerVisible(!isDatePickerVisible)}
      placement="bottom"
      arrowPointAtCenter
    >
      <div
        className={`font-bold text-sm px-3 py-1 pr-0 cursor-pointer mt-1 ${isFilterActive ? 'border-blue-anak text-blue-anak' : 'border-grey-200'
          }`}
      >
        {isFilterActive
          ? `${dateFormat(startDate)} - ${dateFormat(endDate)}`
          : title}
      </div>
      <div className="px-2 cursor-pointer relative">

        {
          isFilterActive && (
            <>
              <div
                onClick={resetFilter}
                className="absolute cursor-pointer bg-white z-10 text-center"
                // style={{ right: 15, top: 10 }}
                style={{ background: "#fff", width: 16, height: 16, top: 1 }}
              >
                <Tooltip title="Clear Filter">
                  <BiX className="text-white bg-blue-anak rounded-full mx-auto" size={16} />
                </Tooltip>
              </div>
            </>
          )
        }

        <BiCalendar
          className={`${isFilterActive ? 'text-blue-anak' : ''}`}
          size={18}
        />
      </div>
    </Popover>
  );
}

export default Index;
