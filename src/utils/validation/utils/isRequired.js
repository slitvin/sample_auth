import { generate, REQUIRED_FIELD } from './messages';

export default function ({field, value}) {
  const msg = generate({ field });

  const errors = {};
  if (!value) {
    errors[field] = msg[REQUIRED_FIELD];
  }

  return errors;
}
