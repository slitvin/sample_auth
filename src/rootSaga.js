import { all, fork } from 'redux-saga/effects';
import { loginWatcher } from './modules/signIn/signInWorkers';
import { singUpWatcher } from './modules/signUp/signUpWorkers';
import { passwordResetWatcher } from './modules/resetPassword/resetWorker';
import { verifyCodeWatcher} from './modules/verifyEmail/verifyWorker'
export default function* rootSaga() {
  yield all([
    fork(loginWatcher),
    fork(singUpWatcher),
    fork(passwordResetWatcher
    ),
    fork(verifyCodeWatcher)
  ]);
}
