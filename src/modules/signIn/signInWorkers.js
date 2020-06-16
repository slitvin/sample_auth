import { all, call, put, select, takeLatest, takeEvery } from 'redux-saga/effects';
import SignInService from '../../services/signInService';
import { signInSelectors } from './signInSelectors';
import { pushLogout, pushSignIn, clearAllErrors, clearAll } from './signInActions';
import { removeToken, saveToken } from '../../services/api';
import validateLogin from '../../utils/validation/validateLogin';

function logoutWorker() {
  removeToken();
}

function* loginWorker() {
  try {
    yield put(pushSignIn.request());

    const { input } = yield select(signInSelectors.getLogin);

    const { isValid, errors } = validateLogin(input);

    if (isValid) {
      yield saveToken('token');
      yield put(pushSignIn.success('token'));
    } else {
      yield put(pushSignIn.failure(errors));
    }
  } catch (e) {
    yield put(pushSignIn.failure());
  }
}

export function* loginWatcher() {
  yield all([
    takeLatest(pushSignIn.TRIGGER, loginWorker),
    takeLatest(pushLogout, logoutWorker),
    takeEvery(clearAll.TRIGGER, loginWorker)
  ]);
}
