import { toast } from 'react-toastify';
import React from 'react';

import { Info, Success, Error } from '../components/alerts';

toast.configure();

export default class Notification {
  static defaultConfig = { position: toast.POSITION.TOP_CENTER };
  static success(message, config = this.defaultConfig) {
    return toast.success(<Success message={message} />, config);
  }

  static error(message = 'Something went wrong', config = this.defaultConfig) {
    return toast.error(<Error message={message} />, config);
  }

  static info(message, config = this.defaultConfig) {
    return toast.info(<Info message={message} />, config);
  }
}
