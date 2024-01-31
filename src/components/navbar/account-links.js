import React from 'react';
import { Link } from 'react-router-dom';
import { FiLogIn, FiEdit } from 'react-icons/fi';
import { useDispatch } from 'react-redux';
import { logoutRequestAction } from '../../store/actions/authActions';
import { useTranslation } from 'react-i18next';

const AccountLinks = ({ userId }) => {
  const dispatch = useDispatch();
  const { t } = useTranslation();

  const items = [
    {
      url: `/edit-profile/${userId}`,
      icon: <FiEdit size={16} className="stroke-current" />,
      name: t('navbar.user_dropdown.editProfile'),
      badge: null,
    },
    {
      url: '/',
      icon: <FiLogIn size={16} className="stroke-current" />,
      name: t('navbar.user_dropdown.logout'),
      badge: null,
      action: () => dispatch(logoutRequestAction()),
    },
  ];
  return (
    <div className="flex flex-col w-full">
      <ul className="list-none">
        {items.map((item, i) => (
          <li key={i} className="dropdown-item" onClick={item?.action}>
            <Link
              to={item.url}
              className="flex flex-row items-center justify-start h-10 w-full px-2 border-b py-4"
            >
              {item.icon}
              <span className="mx-2">{item.name}</span>
              {item.badge && (
                <span
                  className={`uppercase font-bold text-center p-0 leading-none text-2xs h-4 w-4 inline-flex items-center justify-center rounded-full ${item.badge.color} ml-auto`}
                >
                  {item.badge.number}
                </span>
              )}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AccountLinks;
