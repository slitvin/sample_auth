import api from './api';

export default class SignInService {
  static login({ email, password }) {
    return api.post('/auth/login', {
      email,
      password
    });
  }
}
