import React from 'react';
import { useTranslation } from 'react-i18next';
import {
  BiHomeCircle,
  BiUserCircle,
  BiBuildings,
  BiLockOpen,
  BiCategory,
  BiEnvelope,
  BiListUl,
  BiSearchAlt,
  BiWallet,
  BiTransfer,
  BiFolderOpen,
  BiGroup,
} from 'react-icons/bi';
import Item from './item';
import Logo from './logo';
import '../../css/components/left-sidebar-1.css';

const leftNavConfig = [
  {
    title: 'left_sidebar.administration_panel.label',
    items: [
      {
        url: '/dashboard',
        icon: <BiHomeCircle size={20} />,
        title: 'left_sidebar.administration_panel.dashboard',
        items: [],
        permissions: ['admin_dashboard_access'],
      },
      {
        url: '/system-users',
        icon: <BiUserCircle size={20} />,
        title: 'left_sidebar.administration_panel.system_users',
        items: [],
        permissions: ['system_user_management', 'system_user_view'],
      },
      {
        url: '/roles-and-permission',
        icon: <BiLockOpen size={20} />,
        title: 'left_sidebar.administration_panel.roles_and_permission',
        items: [],
        permissions: [
          'roles_and_permissions_management',
          'roles_and_permissions_view',
        ],
      },
    ],
    permissions: [
      'admin_dashboard_access',
      'system_user_management',
      'system_user_view',
      'roles_and_permissions_management',
      'roles_and_permissions_view',
    ],
  },
  {
    title: 'left_sidebar.organisation_panel.label',
    items: [
      {
        url: '/organisations/categories',
        icon: <BiCategory size={20} />,
        title: 'left_sidebar.organisation_panel.category',
        items: [],
        permissions: ['organization_management', 'organization_view'],
      },
      {
        url: '/organisations/list',
        icon: <BiBuildings size={20} />,
        title: 'left_sidebar.organisation_panel.organisations',
        items: [],
        permissions: ['organization_management', 'organization_view'],
      },
      // {
      //   url: '/organisations/create',
      //   icon: <BiPlusCircle size={20} />,
      //   title: 'left_sidebar.organisation_panel.add_organisations',
      //   items: [],
      //   permissions: ['organization_management'],
      // },
      {
        url: '/organisations/messages',
        icon: <BiEnvelope size={20} />,
        title: 'left_sidebar.organisation_panel.org_message',
        items: [],
        permissions: ['organization_management', 'organization_view'],
      },
      // {
      //   url: '/organisations/users',
      //   icon: <BiUser size={20} />,
      //   title: 'left_sidebar.organisation_panel.org_user',
      //   items: [],
      //   permissions: ['organization_management', 'organization_view'],
      // },
    ],
    permissions: ['organization_management', 'organization_view'],
  },
  {
    title: 'left_sidebar.customer_panel.label',
    items: [
      {
        url: '/customers/list',
        icon: <BiListUl size={20} />,
        title: 'left_sidebar.customer_panel.customer_list',
        items: [],
        permissions: ['customer_management', 'customer_view'],
      }
    ],
    permissions: ['customer_management', 'customer_view', 'customer_kyc_view'],
  },
  {
    title: 'Essential Services',
    items: [
      {
        url: '/customers/igw',
        icon: <BiGroup size={20} />,
        title: 'IGW',
        items: [],
        permissions: ['customer_management', 'customer_kyc_view'],
      },
    ],
    permissions: ['customer_management', 'customer_view', 'customer_kyc_view'],
  },
  {
    title: 'Compliance Panel',
    items: [
      {
        url: '/customers/kyc',
        icon: <BiSearchAlt size={20} />,
        title: 'left_sidebar.customer_panel.kyc_details',
        items: [],
        permissions: ['customer_management', 'customer_kyc_view'],
      },
      {
        url: '/customers/cases',
        icon: <BiFolderOpen size={20} />,
        title: 'Customer Cases',
        items: [],
        permissions: ['customer_management', 'customer_view'],
      },
    ],
    permissions: ['customer_management', 'customer_view', 'customer_kyc_view'],
  },
  {
    title: 'left_sidebar.wallet_panel.label',
    items: [
      {
        url: '/wallet-details',
        icon: <BiWallet size={20} />,
        title: 'left_sidebar.wallet_panel.wallet_details',
        items: [],
        permissions: ['wallet_management'],
      },
      {
        icon: <BiTransfer size={20} />,
        title: 'left_sidebar.wallet_panel.transactions.label',
        items: [
          {
            url: '/transactions/overview',
            title: 'Overview',
            items: [],
          },
          {
            url: '/transactions/list',
            title: 'All Transactions',
            items: [],
          },
        ],
        permissions: ['transaction_management'],
      },
    ],
    permissions: ['wallet_management', 'transaction_management'],
  }
];

const Sidebar = ({ authUser }) => {
  const permissionsList = authUser?.permissions?.map(
    (permission) => permission.codename
  );
  const { t } = useTranslation();
  return (
    <div className="left-sidebar left-sidebar-1 sticky top-0 z-10 self-start">
      <Logo />
      {leftNavConfig.map((nav, i) => (
        <div key={i} className="mb-3">
          {permissionsList.some((r) => nav.permissions.includes(r)) && (
            <div className="left-sidebar-title">
              <span>{t(nav.title)}</span>
            </div>
          )}
          <ul>
            {nav.items.map((l0, a) => (
              <li key={a} className="l0">
                {permissionsList.some((r) => l0.permissions.includes(r)) && (
                  <Item {...l0} />
                )}
                {l0.items && (
                  <ul>
                    {l0.items.map((l1, b) => (
                      <li key={b} className="l1">
                        {permissionsList.some((r) =>
                          l0.permissions.includes(r)
                        ) && <Item {...l1} />}
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </div>
      ))}
      <div className="mb-10"></div>
      <div className='fixed w-100 left-0 bottom-0 bg-white border-t border-grey-200 text-xs'>
        <li className="left-sidebar-item px-4 list-none"><span className="title">V 1.0.2</span></li>
      </div>
    </div>
  );
};

export default Sidebar;
