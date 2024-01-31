import React, { useState, useEffect, useRef } from 'react';
import { BiX } from 'react-icons/bi';
import Portal from '../portal';
import { Button } from 'antd';

const Modal4 = ({
  title,
  buttonTitle,
  modalButtonTitle,
  buttonClassName,
  buttonType,
  body,
  icon = null,
}) => {
  const modalRef = useRef(null);
  const [open, setOpen] = useState(false);
  const show = () => {
    setOpen(true);
  };
  const hide = () => {
    setOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!modalRef || !modalRef.current) return false;
      console.log(modalRef.current.contains(event.target));
      if (!open || modalRef.current.contains(event.target)) {
        return false;
      }
      setOpen(!open);
    };
    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [open, modalRef]);

  return (
    <>
      <Button
        type={buttonType}
        size="large"
        icon={icon}
        onClick={show}
        className={`flex items-center justify-center ${buttonClassName}`}
      >
        {buttonTitle}
      </Button>

      {open && (
        <Portal selector="#portal">
          <div className="modal-backdrop fade-in"></div>
          <div className="modal show-slide">
            <div
              className="absolute right-0 inset-y-0 sider-md"
              ref={modalRef}
            >
              <div className="bg-white px-6 py-4 shadow-lg relative flex flex-col w-full outline-none h-full">
                <div className="flex items-center border-b pb-4 ">
                  <BiX onClick={hide} className="h-8 w-8 mr-2 cursor-pointer text-grey-400" />
                  <div className="font-bold text-lg text-left">{title}</div>
                </div>
                <div>{body}</div>
                <div className="flex items-center justify-between">
                  <Button
                    className={buttonClassName}
                    type="success"
                    onClick={hide}
                    size="large"
                    block
                  >
                    {modalButtonTitle}
                  </Button>
                  {/* <Button
                    className="btn-grey border font-bold rounded-md border-grey-800 px-12 py-2 w-40"
                    type="button"
                    onClick={hide}
                  >
                    Cancel
                  </Button> */}
                </div>
              </div>
            </div>
          </div>
        </Portal>
      )}
    </>
  );
};

export default Modal4;
