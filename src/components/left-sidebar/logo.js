import React from 'react';
import { FiMenu } from 'react-icons/fi';
import { useSelector, useDispatch, shallowEqual } from 'react-redux';
import { Link } from 'react-router-dom';

const Logo = () => {
  const dispatch = useDispatch();
  const { config, leftSidebar } = useSelector(
    (state) => ({
      config: state.config,
      leftSidebar: state.leftSidebar,
    }),
    shallowEqual
  );
  const { name, logoUrl, collapsed } = { ...config };
  const { showLogo } = { ...leftSidebar };
  if (showLogo) {
    return (
      <div className="logo truncate">
        <Link
          to="/"
          className="flex flex-row items-center justify-start space-x-2"
        >
          <img className="w-8" src={logoUrl} alt={name} />
          <span>{name}</span>
        </Link>
        <button
          onClick={() =>
            dispatch({
              type: 'SET_CONFIG_KEY',
              key: 'collapsed',
              value: !collapsed,
            })
          }
          className="ml-auto mr-4 block md:hidden"
        >
          <FiMenu size={20} />
        </button>
      </div>
    );
  }
  return null;
};

export default Logo;
