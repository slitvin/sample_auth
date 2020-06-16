import axios from 'axios';

const api = axios.create({
  baseURL: '/'
});

api.interceptors.request.use(
  (reqConfig) => {
    if (localStorage.getItem('token'))
      reqConfig.headers.authorization = 'JWT ' + localStorage.getItem('token');

    return reqConfig;
  },
  (err) => Promise.reject(err)
);

api.interceptors.response.use((res) => res.data);

export function saveToken(token) {
  localStorage.setItem('token', token);
}

export function removeToken() {
  localStorage.removeItem('token');
}

export default api;
