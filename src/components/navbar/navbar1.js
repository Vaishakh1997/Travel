import React, { useEffect, useState } from 'react';
import { Modal } from 'antd';
import { useSelector, useDispatch, shallowEqual } from 'react-redux';
import '../../css/components/navbar.css';
import { getUserProfileAction } from '../../store/actions/userProfileActions';
import logo from '../../assets/logo.png'
import { UserOutlined } from '@ant-design/icons';
import Login from '../../pages/login/index'
import { Link } from 'react-router-dom';

// import LanguageSelect from './languageSelect';

const Navbar1 = () => {
  const { config, userProfile } = useSelector(
    (state) => ({
      config: state.config,
      userProfile: state.userProfile,
    }),
    shallowEqual
  );
  let { collapsed } = { ...config };
  const dispatch = useDispatch();

  const [isModalVisible, setIsModalVisible] = useState(false);

  useEffect(() => {
    dispatch(getUserProfileAction());
  }, []); // eslint-disable-line

  return (
    <div className="navbar navbar-1 border-none sticky top-0 z-20 py-3">
      <div className='container mx-auto'>
        <div className="navbar-inner w-full flex items-center justify-start">
        <Link to="/">
          <img src={logo} alt='logo' width="150px" />
          </Link>
          {/* <button
          onClick={() =>
            dispatch({
              type: 'SET_CONFIG_KEY',
              key: 'collapsed',
              value: !collapsed,
            })
          }
          className="mx-4"
        >
          <HiMenuAlt1 size={20} />
        </button> */}
          <span className="ml-auto"></span>
          {/* <LanguageSelect /> */}
          {/* Notifications */}
          {/* <Dropdown3 /> */}
          {/* <Dropdown5 userProfile={userProfile?.user} /> */}
          <button
            onClick={() => setIsModalVisible(!isModalVisible)}
            className="flex rounded ml-2 relative items-center px-4 py-2 bg-transperent border text-white"
          >
            <UserOutlined className='mr-2' size={50} />
            <span className="text-left ">
              <div className="font-bold -mb-1">
              Login / SignUp
              </div>
            </span>
            {/* <BiChevronDown className="w-6 h-6" /> */}
          </button>
          <Modal
            // title="File Added"
            visible={isModalVisible}
            onOk={() => setIsModalVisible(false)}
            onCancel={() => setIsModalVisible(false)}
            footer = {false}
          >
            <Login />
          </Modal>
          {/* <Modal1 title={"titlewqw"} body={"wqqe"} link={"linwqwqk"} /> */}
          <span className="ml-2"></span>
        </div>
      </div>
    </div>
  );
};

export default Navbar1;
