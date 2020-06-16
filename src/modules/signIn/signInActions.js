import createRequestRoutine from '../helpers/createRequestRoutine';
import createTriggerRoutine from '../helpers/createTriggerRoutine';

const prefix = 'signIn';
const createRequestBound = createRequestRoutine.bind(null, prefix);
const createTriggerBound = createTriggerRoutine.bind(null, prefix);

export const pushSignIn = createRequestBound('SIGNIN_PUSH');
export const saveSignInField = createTriggerBound('SIGNIN_FIELD_SAVE');

export const pushLogout = createRequestBound('LOGOUT_PUSH');

export const clearAll = createRequestBound('CLEAR_ALL');
export const clearAllErrors = createRequestBound('CLEAR_ALL_ERRORS');
