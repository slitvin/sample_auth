import validate from './utils/validate';

export default function ({ email, First_Name, Last_Name, Password, agreement }) {
  let errors;

  errors = {
    ...validate.isRequired({ field: 'Password', value: Password }),
    ...validate.isRequired({ field: 'First_Name', value: First_Name }),
    ...validate.isRequired({ field: 'Last_Name', value: Last_Name }),
    ...validate.email(email),
  };

  return {
    errors,
    isValid: !Object.keys(errors).length
  };
}
