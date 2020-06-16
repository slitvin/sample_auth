import validate from './utils/validate';

export default function ({ email, password }) {
  let errors;

  errors = {
    ...validate.length({ field: 'password', value: password }),
    ...validate.email(email)
  };

  return {
    errors,
    isValid: !Object.keys(errors).length
  };
}
