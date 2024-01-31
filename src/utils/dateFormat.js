import moment from 'moment';

export const dateFormat = (date) => {
  if (moment(date).isValid()) {
    return moment(date).format('Do MMM YYYY');
  } else {
    return '-';
  }
};

export const utcToLocalDate = (date) => {
  if (moment(date).isValid()) {
    return moment(date).format('ll');
  } else {
    return '-';
  }
};

export const utcToLocalDateTime = (date) => {
  if (moment(date).isValid()) {
    return moment(date).format('lll');
  } else {
    return '-';
  }
};

export const thisMonthYearFormat = (date) => {
  if (moment(date).isValid()) {
    return moment(date).format('MMM YYYY');
  } else {
    return '-';
  }
};

export const lastMonthYearFormat = (date) => {
  if (moment(date).isValid()) {
    return moment(date).subtract(1, 'month').format('MMM YYYY');
  } else {
    return '-';
  }
};