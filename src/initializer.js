import Axios from "axios";
import { setBaseUrl } from './services/axios/setBaseUrl';
import { setCommonHeaders } from './services/axios/setCommonHeaders';

setBaseUrl(Axios);
setCommonHeaders(Axios);

// Request Interceptor
Axios.interceptors.request.use(function (config) {
  return config;
}, function (error) {
  return Promise.reject(error);
});

// Response Interceptor
Axios.interceptors.response.use(function (response) {
  return response;
}, function (error) {
  let res = error.response;

  if ((res.status === 401) && (!res.config.url.endsWith('api/v1/login'))) {
    const redirectUrl = '/login';
    window.location.replace(redirectUrl);
  }

  return Promise.reject(res);
});
