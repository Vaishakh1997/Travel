import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { BiFilterAlt, BiSearchAlt, BiX } from 'react-icons/bi';
import {
  Table,
  Menu,
  Dropdown,
  Select,
  Button,
  Tooltip,
  Alert,
  Input,
} from 'antd';
import TableDateRange from './table-date-range';
// import { CSVLink } from 'react-csv';
import { isEmpty } from '../../utils/generic';
import DownloadCsv from './download';

// import moment from 'moment';
// import { TableSkeleton } from '../skeleton/WidgetSkeleton';
function TableUniversal({
  initialTableParams,
  menuFilter,
  dispatchAction,
  menuFilterBy,
  activeStatusFilter,
  activeStatusFilterBy,
  data,
  loading,
  error,
  children,
  csvExportHeader,
  downloadUrl,
}) {
  const [searchValue, setSearchValue] = useState('');
  const [isFilterActive, setIsFilterActive] = useState(false);
  const [isStatusFilterActive, setIsStatusFilterActive] = useState(false);
  const [tableParams, setTableParams] = useState(initialTableParams);
  const { Option } = Select;
  const dispatch = useDispatch();

  const resetFilter = () => {
    tableParams[menuFilterBy] = '';
    setIsFilterActive(false);
    setTableParams({
      ...tableParams,
    });
  };

  const handleMenuClick = (e) => {
    // resetFilter();
    tableParams[menuFilterBy] = e.key;
    setTableParams({ ...tableParams, page: 1 });
    setIsFilterActive(true);
  };

  const handleStatusFilterClick = (e) => {
    resetFilter();
    tableParams[activeStatusFilterBy] = e.key;
    setTableParams({ ...tableParams, page: 1 });
    setIsStatusFilterActive(true);
  };

  const resetStatusFilter = () => {
    tableParams[activeStatusFilterBy] = '';
    setIsStatusFilterActive(false);
    setTableParams({
      ...tableParams,
    });
  };

  const pageSizeHandler = (page_size) => {
    setTableParams({ ...tableParams, page_size });
  };
  const tableActionHandler = (pagination, filters, sorter, extra) => {
    const ordering =
      sorter.order === 'ascend'
        ? sorter.field
        : sorter.order === 'descend'
          ? `-${sorter.field}`
          : '';
    const page = pagination.current;
    setTableParams({
      ...tableParams,
      ordering,
      page,
    });
  };


  const filterMenu = (
    <Menu onClick={handleMenuClick}>
      {/* <span className='block text-sm px-3 border-b border-grey-300'>Filter by Wallet Status</span> */}
      {menuFilter.map((item, index) => (
        <Menu.Item
          className={`font-bold py-2 ${index !== menuFilter.length - 1 ? 'border-b border-grey-100' : ''
            }`}
          key={item.key}
        >
          {item.value}
        </Menu.Item>
      ))}
    </Menu>

  );

  const statusFilterMenu = (
    <Menu onClick={handleStatusFilterClick}>
      {
        !isEmpty(activeStatusFilter) && activeStatusFilter.map((item, index) => (
          <Menu.Item
            className={`font-bold py-2 ${index !== activeStatusFilter.length - 1 ? 'border-b border-grey-100' : ''
              }`}
            key={item.key}
          >
            {item.value}
          </Menu.Item>
        ))
      }
    </Menu>
  )

  const datePickerHandler = ({ startDate = '', endDate = '' }) => {
    setTableParams({
      ...tableParams,
      page: 1,
      created_at_after: startDate,
      created_at_before: endDate,
    });
  };
  const searchInputHandler = (e) => {
    setSearchValue(e.target.value.toLowerCase());
    setTableParams({
      ...initialTableParams,
      search: e.target.value.toLowerCase(),
    });
  };
  // const path = window.location.pathname;
  // const page = path.split("/").pop();

  // const exportCsvConfig = {
  //   data: data?.results,
  //   headers: csvExportHeader,
  //   filename: `${page}-${moment(new Date().getTime()).format('DD-MM-YYYY-h-mm-ss')}.csv`,
  // };
  useEffect(() => {
    if (searchValue !== '') {
      const timer = setTimeout(() => {
        dispatch(dispatchAction(tableParams));
      }, 600);
      return () => {
        clearTimeout(timer);
      };
    } else {
      dispatch(dispatchAction(tableParams));
    }
  }, [tableParams, searchValue]); //eslint-disable-line react-hooks/exhaustive-deps

  return (
    <>
      <div className="grid grid-cols-3 sm:grid-cols-6 md:grid-cols-12 gap-4 px-4 pb-4">
        <div className="hidden sm:block col-span-3 order-last md:order-first">
          Show
          <Select
            className="px-2"
            defaultValue={tableParams.page_size}
            onChange={pageSizeHandler}
          >
            <Option value="10">10</Option>
            <Option value="50">50</Option>
            <Option value="100">100</Option>
          </Select>
          Entries
        </div>
        <div className="col-span-4">
          <Input
            className="rounded-lg lg:max-w-sm table-search"
            type="text"
            placeholder="Search..."
            onChange={searchInputHandler}
            prefix={<BiSearchAlt />}
          />
        </div>
        <div className="col-span-5 justify-self-start md:justify-self-end flex">
          <TableDateRange datePickerHandler={datePickerHandler} />
          {menuFilter.length !== 0 && (
            <div className="flex sm:border-l border-grey-200 relative">
              {isFilterActive && (
                <div
                  onClick={resetFilter}
                  className="absolute cursor-pointer bg-white z-10"
                  style={{ right: 15, top: 10 }}
                >
                  <Tooltip title="Clear Filter">
                    <BiX className="text-white bg-blue-anak rounded-full" />
                  </Tooltip>
                </div>
              )}
              <Dropdown
                overlayStyle={{ width: '180px' }}
                placement="bottomRight"
                overlay={filterMenu}
                className="cursor-pointer"
                trigger={['click']}
              >
                <Button
                  type="link"
                  className={`flex items-center ${isFilterActive ? 'btn-active' : ''
                    }`}
                >
                  Filter <BiFilterAlt className="ml-1" />
                </Button>
              </Dropdown>
            </div>
          )}

          {!isEmpty(activeStatusFilter) && (
            <div className="flex sm:border-l border-grey-200 relative">
              {isStatusFilterActive && (
                <div
                  onClick={resetStatusFilter}
                  className="absolute cursor-pointer bg-white z-10"
                  style={{ right: 15, top: 10 }}
                >
                  <Tooltip title="Clear Filter">
                    <BiX className="text-white bg-blue-anak rounded-full" />
                  </Tooltip>
                </div>
              )}
              <Dropdown
                overlayStyle={{ width: '180px' }}
                placement="bottomRight"
                overlay={statusFilterMenu}
                className="cursor-pointer"
                trigger={['click']}
              >
                <Button
                  type="link"
                  className={`flex items-center ${isStatusFilterActive ? 'btn-active' : ''
                    }`}
                >
                  User Status Filter <BiFilterAlt className="ml-1" />
                </Button>
              </Dropdown>
            </div>
          )}


        </div>
      </div>
      {error ? (
        <Alert
          message="Failed to load table. Retry after sometime."
          type="error"
          showIcon
        />
      ) : (
        <Table
          dataSource={!loading && data?.results}
          bordered={true}
          rowKey={(record) => record.id || record.uuid}
          scroll={{ x: true }}
          onChange={tableActionHandler}
          loading={loading}
          pagination={{
            className: 'px-4 right-align',
            showSizeChanger: false,
            current: tableParams.page,
            pageSize: tableParams.page_size,
            total: data?.count,
            showTotal: (total, range) => (
              <div className="flex">
                <div>
                  {`Showing ${range[0]} to ${range[1]} of ${total} Entries`}
                </div>
                {!isEmpty(downloadUrl) && (
                  // <CSVLink
                  //   className="text-white hover:text-white ant-btn-primary px-4 mx-4 flex items-center"
                  //   {...exportCsvConfig}
                  // >
                  //   Export to CSV
                  //   <BiExport className="w-4 ml-2" />
                  // </CSVLink>

                  <DownloadCsv downloadUrl={downloadUrl} />
                )}
              </div>
            ),
          }}
        >
          {children}
        </Table>
      )}
    </>
  );
}

export default TableUniversal;
