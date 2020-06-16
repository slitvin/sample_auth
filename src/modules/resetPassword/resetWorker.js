import { all, call, put, select, takeLatest } from 'redux-saga/effects';
import resetPasswordService from '../../services/signInService';
import { resetSelectors } from './resetSelectors';
import { pushResetPassword } from './resetActions';
import validateEmail from '../../utils/validation/utils/validateEmail';

function* passwordResetWorker() {
  try {
    yield put(pushResetPassword.request());

    const email = yield select(resetSelectors.getResetEmail);

    const errors = validateEmail(email);

    if (!Object.keys(errors).length) {

      yield call(resetPasswordService.reset, email);

      yield put(pushResetPassword.success());
    } else {
      yield put(pushResetPassword.failure(errors));
    }
  } catch (e) {
    yield put(pushResetPassword.failure());
  }
}

export function* passwordResetWatcher() {
  yield all([takeLatest(pushResetPassword.TRIGGER, passwordResetWorker)]);
}
