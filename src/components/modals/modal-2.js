import React, { useState, useEffect, useRef } from 'react';
import { useSelector, shallowEqual } from 'react-redux';
import Portal from '../portal';
import { Button } from 'antd';

const Modal2 = ({
  title,
  subTitle,
  buttonTitle,
  // buttonClass = 'btn-primary',
  buttonType,
  modalButtonTitle,
  modalButtonClassName,
  body,
}) => {
  const { palettes } = useSelector(
    (state) => ({
      palettes: state.palettes,
    }),
    shallowEqual
  );
  let { background } = {
    ...palettes,
  };

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
      <Button size="large" className="w-48" type={buttonType} onClick={show}>
        {buttonTitle}
      </Button>
      {open && (
        <Portal selector="#portal">
          <div className="modal-backdrop fade-in"></div>
          <div
            className={`modal show ${background === 'dark' ? 'dark-mode' : ''}`}
            data-background={background}
          >
            <div
              className="relative w-auto lg:my-4 mx-auto lg:max-w-lg max-w-sm"
              ref={modalRef}
            >
              <div className="bg-white px-6 py-4 text-grey-anak rounded-lg shadow-lg relative flex flex-col w-full outline-none">
                <div className="relative flex flex-col items-center">
                  <div className="text-lg my-2 font-bold">{title}</div>
                  {subTitle && (
                    <div className="text-md p-4 font-bold text-center">
                      {subTitle}
                    </div>
                  )}
                  <div className="w-full">{body}</div>
                </div>
                <div className="flex items-center justify-between rounded-b space-x-4">
                  <button
                    className={`${modalButtonClassName}`}
                    type="button"
                    onClick={hide}
                  >
                    {modalButtonTitle}
                  </button>
                  <button
                    className="btn-grey border font-bold rounded-md border-grey-800 px-12 py-2 w-40"
                    type="button"
                    onClick={hide}
                  >
                    Cancel
                  </button>
                </div>
              </div>
            </div>
          </div>
        </Portal>
      )}
    </>
  );
};

export default Modal2;
