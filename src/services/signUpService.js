import api from './api';

export default class SignUpService {
  static signup({ First_Name, Last_Name, email, Password }) {
    return api.post('/auth/signup', {
      First_Name,
      Last_Name,
      email,
      Password
    });
  }
}
