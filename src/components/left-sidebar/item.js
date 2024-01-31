import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { FiChevronRight } from 'react-icons/fi';
import { useSelector, useDispatch, shallowEqual } from 'react-redux';
import { useTranslation } from 'react-i18next';

const Item = ({ url, icon, title, badge, items }) => {
  const { t } = useTranslation();
  const [hidden, setHidden] = useState(true);

  const [windowWidth, setWindowWidth] = useState();

  const dispatch = useDispatch();
  const { config } = useSelector(
    (state) => ({ config: state.config }),
    shallowEqual
  );

  const { collapsed } = { ...config };

  useEffect(() => {
    function handleResize() {
      setWindowWidth(window.innerWidth);
    }

    handleResize();
    window.addEventListener('resize', handleResize);
  }, []);

  const hideMenu = () => {
    if (windowWidth < 767) {
      dispatch({
        type: 'SET_CONFIG_KEY',
        key: 'collapsed',
        value: !collapsed,
      });
    }
  };

  let location = useLocation();
  let { pathname } = { ...location };
  let active = pathname.includes(url) ? true : false;
  if (pathname === '/' && url === '/dashboard') {
    active = true;
  }
  if (items.length === 0) {
    return (
      <Link
        to={url}
        className={`left-sidebar-item ${active ? 'active' : ''}`}
        onClick={hideMenu}
      >
        {icon}
        <span className="title">{t(title)}</span>
      </Link>
    );
  }
  return (
    <button
      onClick={() => setHidden(!hidden)}
      className={`left-sidebar-item ${active ? 'active' : ''} ${
        hidden ? 'hidden-sibling' : ''
      }`}
    >
      {icon}
      <span className="title">{t(title)}</span>
      <FiChevronRight className="ml-auto arrow" />
    </button>
  );
};

export default Item;
