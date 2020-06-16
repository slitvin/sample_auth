import { all, call, put, select, takeLatest } from 'redux-saga/effects';
import { signUpSelectors } from './signUpSelectors';
import { pushSignUp, clearAll } from './signUpActions';
import validateAccountCreateForm from '../../utils/validation/validateAccountCreateForm';

function* singUpWorker() {
  try {
    yield put(pushSignUp.request());

    const { input } = yield select(signUpSelectors.getNewUser);
    const { isValid, errors } = validateAccountCreateForm(input);

    if (isValid) {
      yield put(pushSignUp.success('token'));
    } else {
      yield put(pushSignUp.failure(errors));
    }
  } catch (e) {
    yield put(pushSignUp.failure());
  }
}

export function* singUpWatcher() {
  yield all([takeLatest(pushSignUp.TRIGGER, singUpWorker)]);
}
