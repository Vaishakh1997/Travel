import accounting from 'accounting';
import { isEmpty } from './generic';

export function random(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

export function formatPercent(percent) {
  return `${accounting
    .formatMoney(percent, '', 1, ',', '.')
    .replace(/\.00$/g, '')}%`;
}

export function formatCurrency(value) {
  if (isEmpty(value)) {
    return '0.00';
  } else {
    return accounting.formatMoney(value, '', 2, ',', '.').replace(/\.00$/g, '');
  }
}

export function formatCurrencyToDecimal3(value) {
  if (isEmpty(value)) {
    return '0.000';
  } else {
    return accounting.formatMoney(value, '', 3, ',', '.').replace(/\.000$/g, '');
  }
}

export function formatNumber(value) {
  if (!isEmpty(value)) {
    return accounting.formatMoney(value, '', 2, ',', '.').replace(/\.00$/g, '');
  } else {
    return '-';
  }
}
