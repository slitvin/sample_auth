import { all,  put, select, takeLatest } from 'redux-saga/effects';
import { signInSelectors } from './signInSelectors';
import { pushLogout, pushSignIn} from './signInActions';
import { removeToken, saveToken, validateUser } from '../../services/api';
import validateLogin from '../../utils/validation/validateLogin';

function* logoutWorker() {
  yield put(pushLogout.request());
  yield put(pushLogout.request());
  removeToken();
}

function* loginWorker() {
  try {
    yield put(pushSignIn.request());

    const { input } = yield select(signInSelectors.getLogin);

    const { isValid, errors } = validateLogin(input);

    if (isValid) {
      yield validateUser();
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
    takeLatest(pushSignIn, loginWorker),
    takeLatest(pushLogout, logoutWorker),
  ]);
}
