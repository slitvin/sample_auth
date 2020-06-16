import api from './api';

export default class resetPasswordService {
  static reset(email) {
    return api.post('/auth/reset', { email });
  }
}
