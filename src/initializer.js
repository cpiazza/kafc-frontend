import Axios from 'axios';
import store from './appStore'
import { setBaseUrl } from './services/axios/setBaseUrl';
import { setCommonHeaders } from './services/axios/setCommonHeaders';

setBaseUrl(Axios);
setCommonHeaders(Axios);

// Request Interceptor
Axios.interceptors.request.use(function (config) {
  const state = store.getState();

  if (state.auth.user !== undefined) {
    config.headers.common['Authorization'] = state.auth.user.jwt
  }

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
