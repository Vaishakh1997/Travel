import React, { useState, useEffect, useRef } from 'react';
import { usePopper } from 'react-popper';
import { FiBell } from 'react-icons/fi';
import List2 from './list-2';

const Dropdown = () => {
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
    <div className="hidden lg:flex relative">
      <button
        ref={buttonRef}
        onClick={handleDropdownClick}
        className="flex items-center justify-center h-16 w-12"
      >
        <span
          className="absolute font-bold uppercase inline-flex text-center px-1 leading-none text-3xs items-center justify-center rounded-full bg-green-anak text-white border-2 border-white"
          style={{ top: 14, right: 6 }}
        >
          10
        </span>
        <FiBell size={18} />
      </button>
      <div ref={dropdownRef} style={styles.popper} {...attributes.popper}>
        <div
          style={styles.offset}
          className={`dropdown ${hidden ? '' : 'open'}`}
        >
          <div className="dropdown-content w-64 bottom-start">
            <List2 />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dropdown;
