const INVALID = 'INVALID';
const LENGTH = 'LENGTH';
const REQUIRED = 'REQUIRED';
const INFO = 'INFO';
const MATCH = 'MATCH';
const CONFIRM = 'CONFIRM';
const REQUIRED_FIELD = 'REQUIRED_FIELD';

function generate({ field, min, max, messages }) {
  return {
    [LENGTH]: `${field} must be ${max ? '' : 'min '}${min}${
      max ? '-' + max : ''
    } characters long`,
    [REQUIRED]: `${field} is required`,
    [REQUIRED_FIELD]: `${field} is required`,
    [INVALID]: `${field} is invalid`,
    [CONFIRM]: `The confirm password is required`,
    ...messages
  };
}

export { INVALID, LENGTH, REQUIRED, CONFIRM, INFO, MATCH, REQUIRED_FIELD, generate };
