import isLength from 'validator/lib/isLength';
import { generate, LENGTH, REQUIRED } from './messages';

const limit = {
  min: 8,
  max: 32
};

export default function ({ field, value, customLimit }) {
  const msg = generate({ field, ...limit, ...customLimit });

  const errors = {};

  if (!value) {
    errors[field] = msg[REQUIRED];
  } else if (!isLength(value, limit)) {
    errors[field] = msg[LENGTH];
  }

  return errors;
}
