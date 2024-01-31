import React, { useState, useEffect, useRef } from 'react';
import { usePopper } from 'react-popper';
import { FiMessageSquare } from 'react-icons/fi';
import ProjectStatus from './project-status';

const Dropdown = () => {
  const [hidden, setHidden] = useState(true);

  const buttonRef = useRef(null);
  const dropdownRef = useRef(null);

  const { styles, attributes } = usePopper(
    buttonRef.current,
    dropdownRef.current,
    {
      placement: 'bottom-start',
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
        className="flex items-center justify-center h-16 w-12 relative"
      >
        <FiMessageSquare size={18} />
        <span
          className="absolute uppercase font-bold inline-flex text-center p-0 leading-none text-2xs h-4 w-4 items-center justify-center rounded-full bg-blue-500 text-white"
          style={{ top: 14, right: 8 }}
        >
          3
        </span>
      </button>
      <div ref={dropdownRef} style={styles.popper} {...attributes.popper}>
        <div
          style={styles.offset}
          className={`dropdown ${hidden ? '' : 'open'}`}
        >
          <div className="dropdown-content w-64 bottom-start">
            <ProjectStatus />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dropdown;
