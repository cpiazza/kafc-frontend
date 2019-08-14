export function rootUrl() {
  if (process.env.NODE_ENV === 'development') {
    return `${window.location.protocol}//${window.location.hostname}:3000/api/v1/`;
  }

  if (process.env.NODE_ENV === 'test') {
    return `${window.location.protocol}//${window.location.hostname}:31337/api/v1/`;
  }

  return 'https://www.kafc.com/api/v1/';
}

export function setBaseUrl(Axios) {
  Axios.defaults.baseURL = rootUrl();
}
