export default function config(
  state = {
    name: 'WINDS Travel',
    description: '',
    layout: 'layout-1',
    logoUrl: '/logo-dark.svg',
    collapsed: false,
    rightSidebar: false,
    backdrop: false,
  },
  action
) {
  switch (action.type) {
    case 'SET_CONFIG':
      return {
        ...state,
        ...action.config,
      };
    case 'SET_CONFIG_KEY':
      let { key, value } = { ...action };
      return {
        ...state,
        [`${key}`]: value,
      };
    default:
      return state;
  }
}
