import React, {useState, useEffect, useRef} from 'react'
import {usePopper} from 'react-popper'
import {FiChevronDown} from 'react-icons/fi'
import List1 from './list-1'

const Dropdown = () => {
  const [hidden, setHidden] = useState(true)

  const buttonRef = useRef(null)
  const dropdownRef = useRef(null)

  const {styles, attributes} = usePopper(
    buttonRef.current,
    dropdownRef.current,
    {
      placement: 'bottom-start',
      modifiers: [
        {
          name: 'offset',
          enabled: true,
          options: {
            offset: [0, 0]
          }
        }
      ]
    }
  )

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        hidden ||
        buttonRef.current.contains(event.target) ||
        dropdownRef.current.contains(event.target)
      ) {
        return false
      }
      setHidden(!hidden)
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [hidden, dropdownRef, buttonRef])

  const handleDropdownClick = () => {
    setHidden(!hidden)
  }

  return (
    <>
      <button
        ref={buttonRef}
        onClick={handleDropdownClick}
        className="btn btn-default btn-icon bg-transparent h-16">
        <span className="mr-2">Explore</span>
        <FiChevronDown className="stroke-current" />
      </button>
      <div ref={dropdownRef} style={styles.popper} {...attributes.popper}>
        <div
          style={styles.offset}
          className={`dropdown ${hidden ? '' : 'open'}`}>
          <div className="dropdown-content w-128 bottom-start">
            <List1 />
          </div>
        </div>
      </div>
    </>
  )
}

export default Dropdown
