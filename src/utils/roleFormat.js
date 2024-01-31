export const createdByFormat = (id) => {
  switch (id) {
    case 1:
      return 'Gaurav';
    case 2:
      return 'Moderator';
    case 3:
      return 'Org Admin';
    case 4:
      return 'Org User';
    default:
      return '-';
  }
};
