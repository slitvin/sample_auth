import isInt from 'validator/lib/isInt';
import { generate, INVALID, REQUIRED } from './messages';

const settings = {
  min: 0
};

export default function ({ field, value, limit, messages }) {
  const customSettings = { ...settings, ...limit, messages };

  const msg = generate({ field, ...customSettings });

  const errors = {};

  if (!value) {
    errors[field] = msg[REQUIRED];
  } else if (!isInt(String(value), customSettings)) {
    errors[field] = msg[INVALID];
  }

  return errors;
}
