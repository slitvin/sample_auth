import validate from './utils/validate';

export default function ({ code }) {
  let errors;

  errors = {
    ...validate.integer({ field:'code', value: code })
  };

  return {
    errors,
    isValid: !Object.keys(errors).length
  };
}
