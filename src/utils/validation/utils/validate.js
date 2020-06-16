import validateEmail from './validateEmail';
import validateInteger from './validateInteger';
import validateLength from './validateLength';
import validateCheckBox from './validateCheckBox';
import isRequired from './isRequired';

export default {
  email: validateEmail,
  length: validateLength,
  integer: validateInteger,
  checkbox: validateCheckBox,
  isRequired
};
