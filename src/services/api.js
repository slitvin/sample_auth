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
export function validateUser(loginUser){
  return new Promise((resolve, reject)=>{
    const user = JSON.parse(localStorage.getItem('user'));
    if(user){
      if(loginUser.email === user.email && loginUser.Password === user.Password){
        resolve(user)
      }else{
        reject('Wrong email or password')
      }
    } else{
      reject('User is not registered')
    }

  });
}
export function saveToken(token) {
  localStorage.setItem('token', token);
}
export function saveUser(user){
  localStorage.setItem('user', JSON.stringify(user));
}
export function removeToken() {
  localStorage.removeItem('token');
}

export default api;
