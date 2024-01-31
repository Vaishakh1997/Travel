export default function palettes(
  state = {
    background: 'light',
    leftSidebar: 'light',
    navbar: 'light',
    rightSidebar: 'light',
    header: 'navbar1'
  },
  action
) {
  switch (action.type) {
    case 'SET_PALETTE':
      return {
        ...state,
        ...action.palette,
      };
    case 'RESET_PALETTES':
      return {
        background: 'light',
        leftSidebar: 'light',
        navbar: 'light',
        rightSidebar: 'light',
        header: 'navbar1'
      };
    default:
      return state;
  }
}
