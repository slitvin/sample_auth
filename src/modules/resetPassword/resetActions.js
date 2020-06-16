import createRequestRoutine from '../helpers/createRequestRoutine';
import createTriggerRoutine from '../helpers/createTriggerRoutine';

const prefix = 'reset';
const createRequestBound = createRequestRoutine.bind(null, prefix);
const createTriggerBound = createTriggerRoutine.bind(null, prefix);

export const pushResetPassword = createRequestBound('RESET_PASSWORD_PUSH');
export const saveResetEmailField = createTriggerBound('EMAIL_RESET_FIELD_SAVE');
export const clearResetErrors = createTriggerBound('CLEAR_RESET_ERRORS');
export const clearResetEmail = createTriggerBound('CLEAR_RESET_EMAIL');
