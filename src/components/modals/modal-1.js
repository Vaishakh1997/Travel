import React, { useState, useEffect, useRef } from 'react';
import { useSelector, shallowEqual } from 'react-redux';
import Portal from '../portal';
import { BiX } from 'react-icons/bi';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const Modal = ({ title, body, link }) => {
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
      {link && (
        <button
          className="text-blue-link font-bold cursor-pointer"
          type="button"
          onClick={show}
        >
          {link}
        </button>
      )}
      {open && (
        <Portal selector="#portal">
          <div className="modal-backdrop fade-in"></div>
          <div
            className={`modal show ${background === 'dark' ? 'dark-mode' : ''}`}
            data-background={background}
          >
            <div
              className="relative mx-auto w-11/12 lg:w-128"
              ref={modalRef}
            >
              <div className="bg-white px-6 py-4 text-grey-anak rounded-lg shadow-lg relative flex flex-col w-full outline-none">
                <div
                  className="absolute cursor-pointer"
                  style={{ top: -10, right: -10 }}
                  onClick={hide}
                >
                  <BiX className="w-6 h-6 rounded-full bg-blue-link text-white" />
                </div>
                <div className="text-lg my-2 font-bold">{title}</div>
                <div className="w-full">{body}</div>
              </div>
            </div>
          </div>
        </Portal>
      )}
    </>
  );
};

export default Modal;
