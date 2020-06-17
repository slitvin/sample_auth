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


export async function validateUser (loginUser){
  try {
    const user = JSON.parse(localStorage.getItem('user'));
    console.log(user,loginUser)
    if(user){
      if(loginUser.email === user.email && loginUser.password === user.Password){
        return user;
      }else{
      throw new Error('Wrong email or password');
      }
    } else{
      throw new Error('User is not registered');
    }
  } catch (error) {
    
  }
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
