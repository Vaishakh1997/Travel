import React from 'react';
import { useSelector, shallowEqual } from 'react-redux';
import Loader from '../../components/loader';
import Navbar from '../../components/navbar/navbar1';
import Hotkeys from '../../components/hotkeys';
import Backdrop from '../../components/backdrop';
import { NotificationContainer } from 'react-notifications';
import '../../css/layouts/layout-1.css';
import Navbar1 from '../../components/navbar/navbar1';
import Navbar2 from '../../components/navbar/navbar2';

const Layout = ({ children }) => {
  const { config, palettes, auth } = useSelector(
    (state) => ({
      config: state.config,
      palettes: state.palettes,
      auth: state.auth,
    }),
    shallowEqual
  );
  console.log(palettes);
  const { layout, collapsed } = { ...config };
  let { background, navbar, logo, leftSidebar, rightSidebar } = {
    ...palettes,
  };
  let key = `${[
    layout,
    collapsed,
    background,
    navbar,
    logo,
    leftSidebar,
    rightSidebar,
  ].join('-')}`;

  return (
    <div
      data-layout={layout}
      data-collapsed={collapsed}
      data-background={background}
      data-navbar={navbar}
      data-logo={logo}
      data-left-sidebar={leftSidebar}
      data-right-sidebar={rightSidebar}
    >
      <Loader />
      <Backdrop />
      <NotificationContainer />
      <Hotkeys key={key} />
      <div className="wrapper">
        <div className="w-full">
          {palettes?.header === 'navbar1' ? <Navbar1 /> : <Navbar2 />}
          {children}
        </div>
      </div>
    </div>
  );
};
export default Layout;
