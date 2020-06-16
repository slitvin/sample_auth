import { all, call, put, select, takeLatest } from "redux-saga/effects";
import { verifySelectors } from "./verifySelectors";
import { pushVerify, clearAll } from "./verifyActions";
import validateVerifyCode from "../../utils/validation/validateVerifyCode";
import { saveToken } from "../../services/api";

function* verifyCodeWorker() {
  try {
    yield put(pushVerify.request());
    const { input } = yield select(verifySelectors.getVerifyCode);
    const { isValid, errors } = validateVerifyCode(input);
    if (isValid) {
      yield put(pushVerify.success());
      saveToken('token')
    //   yield put(clearAll())
    } else {
      yield put(pushVerify.failure(errors));
    }
  } catch (e) {
    yield put(pushVerify.failure());
  }
}

export function* verifyCodeWatcher() {
  yield all([takeLatest(pushVerify.TRIGGER, verifyCodeWorker)]);
}
