import React, { useState } from 'react';
import { DateRangePicker } from 'react-date-range';
import moment from 'moment';
// import axios from 'axios';
import { Button, Popover } from 'antd';
import { BiDownload } from 'react-icons/bi';
import { useDispatch, useSelector } from 'react-redux';
import { downloadRequestAction } from '../../store/actions/downloadActions';

function DownloadCsv({ downloadUrl }) {

  const dispatch = useDispatch();
  const [isDatePickerVisible, setIsDatePickerVisible] = useState(false);
  const { downloadRequestLoading } = useSelector((state) => state.download);

  const dateRangeInitialValue = {
    endDate: new Date(),
    startDate: new Date(),
    key: 'selection',
  };
  const [dateRangeOptions, setDateRangeOptions] = useState(
    dateRangeInitialValue
  );
  // const dateDifference = Math.floor((dateRangeOptions.endDate - dateRangeOptions.startDate) / 86400000);
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  const handleSelect = (ranges) => {
    setDateRangeOptions(ranges.selection);
  };

  const cancelDateHandler = () => {
    setIsDatePickerVisible(false);
    setDateRangeOptions({ ...dateRangeInitialValue, startDate, endDate });
  };

  const dateHandler = () => {
    // setDownloadLoading(true);
    setIsDatePickerVisible(false);
    setStartDate(dateRangeOptions.startDate);
    setEndDate(dateRangeOptions.endDate);
    const downloadParams = {
      url: downloadUrl,
      startDate: moment(dateRangeOptions.startDate).format('YYYY-MM-DD'),
      endDate: moment(dateRangeOptions.endDate).format('YYYY-MM-DD'),
    };
    dispatch(downloadRequestAction(downloadParams));
  };

  const content = (
    <div className=" download-csv flex flex-col col-span-3 mx-auto mt-2 transition duration-5000 ease-in">
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
        visible={true}
        onChange={handleSelect}
      />

      <div className="text-center border-t border-grey-200 pt-4 mt-3">
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
    <div>
      <Popover
        content={content}
        trigger="click"
        visible={isDatePickerVisible}
        className="flex justify-center items-center"
        onClick={() => setIsDatePickerVisible(true)}
        placement="bottom"
        arrowPointAtCenter
      >
        <Button
          type="primary"
          className="ml-3 flex items-center"
          icon={<BiDownload className="mr-2" size={18} />}
          loading={downloadRequestLoading}
        >
          Download CSV
        </Button>
      </Popover>
    </div>
  );
}

export default DownloadCsv;
