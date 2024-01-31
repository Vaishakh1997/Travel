import { isEmpty } from './generic';

export const capitalizeFirstLetter = (string) => {
  if (isEmpty(string)) {
    return '-';
  } else {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
};

export const replaceUnderscore = (string) => {
  if (isEmpty(string)) {
    return '-';
  } else {
    return string.replace(/_/g, ' ');
  }
};

export const capitalizeEachWord = (input) => {
  if (!isEmpty(input)) {
    return input
      .toLowerCase()
      .split(' ')
      .map((s) => s.charAt(0).toUpperCase() + s.substring(1))
      .join(' ');
  } else {
    return '-';
  }
};
export const camelCaseString = (input) => {
  if (!isEmpty(input)) {
    return input
      .toLowerCase()
      .split('_')
      .map((s) => s.charAt(0).toUpperCase() + s.substring(1))
      .join(' ');
  } else {
    return '-';
  }
};
