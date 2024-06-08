import axios from 'axios';
import _get from 'lodash/get';

const axiosInstance = axios.create({
  baseURL: 'https://api.github.com/',
  withCredentials: true,
});

axiosInstance.interceptors.request.use((config: any) => {
  return {
    ...config,
    headers: {
      ...config.headers,
      'Accept-Language': 'ar',
      authorization: '',
    },
  };
});

axiosInstance.interceptors.response.use(
  response => response,

  error => {
    if (axios.isCancel(error)) {
      return Promise.reject({
        __CANCEL__: true,
        isCancel: true,
        statusCode: '001',
        code: 'CANCEL',
      });
    }
    return Promise.reject(_get(error, 'response.data'));
  },
);

export default axiosInstance;
