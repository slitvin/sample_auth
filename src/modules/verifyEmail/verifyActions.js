import createRequestRoutine from '../helpers/createRequestRoutine';
import createTriggerRoutine from '../helpers/createTriggerRoutine';

const prefix = 'verify';
const createRequestBound = createRequestRoutine.bind(null, prefix);
const createTriggerBound = createTriggerRoutine.bind(null, prefix);

export const pushVerify = createRequestBound('VERIFY_PUSH');
export const saveVerifyField = createTriggerBound('VERIFY_FIELD_SAVE');

export const clearAll = createTriggerBound('CLEAR_ALL');
