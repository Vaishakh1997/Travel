import Avatar from 'antd/lib/avatar/avatar';
import React, { useState, useEffect, useRef } from 'react';
import { BiChevronDown } from 'react-icons/bi';
import { usePopper } from 'react-popper';
import AccountLinks from './account-links';
import { UserOutlined } from '@ant-design/icons';
import {
  camelCaseString,
  capitalizeEachWord,
} from '../../utils/string-helpers';

const Dropdown = ({ userProfile }) => {

  const [hidden, setHidden] = useState(true);

  const buttonRef = useRef(null);
  const dropdownRef = useRef(null);

  const { styles, attributes } = usePopper(
    buttonRef.current,
    dropdownRef.current,
    {
      placement: 'bottom-end',
      modifiers: [
        {
          name: 'offset',
          enabled: true,
          options: {
            offset: [0, 0],
          },
        },
      ],
    }
  );

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        hidden ||
        buttonRef.current.contains(event.target) ||
        dropdownRef.current.contains(event.target)
      ) {
        return false;
      }
      setHidden(!hidden);
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [hidden, dropdownRef, buttonRef]);

  const handleDropdownClick = () => {
    setHidden(!hidden);
  };

  return (
    <div className="relative text-white">
      <button
        ref={buttonRef}
        onClick={handleDropdownClick}
        className="flex rounded ml-2 relative items-center px-4 py-2 btn-primary"
      >
        {/* {userProfile?.profile_image ? (
          <div
            className="h-8 w-8 rounded-full shadow bg-white bg-cover bg-center"
            style={{
              backgroundImage: `url(${userProfile?.profile_image})`,
            }}
          ></div>
        ) : (
          <Avatar icon={<UserOutlined />} />
        )} */}
        <UserOutlined className='mr-2' size={50}/>
        <span className="text-left ">
          <div className="font-bold -mb-1">
            Login OR Create Account
          </div>
          {/* <div className="font-bold -mb-1">
            {capitalizeEachWord(userProfile?.name) || 'User Name'}
          </div>
          <div className="text-xs">
            {camelCaseString(userProfile?.user_detail?.role[0]) || 'Role'}
          </div> */}
        </span>
        <BiChevronDown className="w-6 h-6" />
      </button>
      <div ref={dropdownRef} style={styles.popper} {...attributes.popper}>
        <div
          style={styles.offset}
          className={`dropdown ${hidden ? '' : 'open'}`}
        >
          <div
            onClick={() => setHidden(!hidden)}
            className="dropdown-content w-48 bottom-end"
          >
            <AccountLinks userId={userProfile?.uuid} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dropdown;
