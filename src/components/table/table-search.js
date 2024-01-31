import React, { useEffect, useState } from 'react';
import { Input } from 'antd';
import { BiSearchAlt } from 'react-icons/bi';
import useDebounce from '../../hooks/useDebounce';

function TableSearch({ tableSearchHandler }) {
  const [searchValue, setSearchValue] = useState('');
  const debouncedSearchValue = useDebounce(searchValue, 500);
  useEffect(() => {
    tableSearchHandler(debouncedSearchValue);
  }, [debouncedSearchValue]); // eslint-disable-line
  const searchInputHandler = (e) => {
    setSearchValue(e.target.value.toLowerCase());
  };
  return (
    <Input
      className="rounded-lg lg:max-w-sm table-search"
      type="text"
      placeholder="Search..."
      onChange={searchInputHandler}
      prefix={<BiSearchAlt />}
    />
  );
}

export default TableSearch;
