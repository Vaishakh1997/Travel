import React from 'react';
import {
  BiHomeCircle,
  BiUserCircle,
  BiBuildings,
  BiLockOpen,
  BiCategory,
  BiPlusCircle,
  BiEnvelope,
  BiUser,
  BiListUl,
  BiSearchAlt,
  BiWallet,
  BiTransfer,
} from 'react-icons/bi';

const initialState = [
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
      {
        url: '/organisations/create',
        icon: <BiPlusCircle size={20} />,
        title: 'left_sidebar.organisation_panel.add_organisations',
        items: [],
        permissions: ['organization_management'],
      },
      {
        url: '/organisations/messages',
        icon: <BiEnvelope size={20} />,
        title: 'left_sidebar.organisation_panel.org_message',
        items: [],
        permissions: ['organization_management', 'organization_view'],
      },
      {
        url: '/organisations/users',
        icon: <BiUser size={20} />,
        title: 'left_sidebar.organisation_panel.org_user',
        items: [],
        permissions: ['organization_management', 'organization_view'],
      },
    ],
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
      },
      {
        url: '/customers/kyc',
        icon: <BiSearchAlt size={20} />,
        title: 'left_sidebar.customer_panel.kyc_details',
        items: [],
        permissions: ['customer_management', 'customer_kyc_view'],
      },
    ],
  },
  // {
  //   title: 'Compliance',
  //   items: [
  //     {
  //       url: '/customers/cases',
  //       icon: <BiListUl size={20} />,
  //       title: 'Customer Cases',
  //       items: [],
  //       permissions: ['customer_management', 'customer_view'],
  //     },
  //   ],
  // },
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
            url: '/p2p-transactions',
            title:
              'left_sidebar.wallet_panel.transactions.p2p_transactions_list',
            items: [],
            permissions: ['transaction_management'],
          },
          {
            url: '/remittance-list',
            title: 'left_sidebar.wallet_panel.transactions.remittance_list',
            items: [],
            permissions: ['transaction_management'],
          },
        ],
      },
    ],
  },
];

export default function navigation(state = initialState, action) {
  switch (action.type) {
    default:
      return state;
  }
}
