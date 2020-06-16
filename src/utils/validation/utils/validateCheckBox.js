import { generate, REQUIRED } from './messages';

const field = 'agreement';

export default function (value) {
  const msg = generate({ field });

  const errors = {};

  if (!value) {
    errors[field] = msg[REQUIRED];
  }

  return errors;
}
