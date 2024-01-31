export const setCookie = (cookieName, cookieValue, daysToExpire = 30) => {
  const date = new Date();
  date.setTime(date.getTime() + daysToExpire * 24 * 60 * 60 * 1000);
  console.log(date);
  document.cookie(
    cookieName +
      '=' +
      cookieValue +
      ';' +
      'expires=' +
      date.toUTCString() +
      ';' +
      'path=/'
  );
};

export const getCookie = (cookieName) => {};
