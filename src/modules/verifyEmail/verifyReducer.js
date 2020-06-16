import { combineReducers } from "redux";
import { handleActions } from "redux-actions";
import * as actions from "./verifyActions";
import { makeStatusWithResetReducer } from "../helpers/reduxHelpers";

const verifyInitial = {
  code: "",
};

const verifyInput = handleActions(
  {
    [actions.saveVerifyField.TRIGGER](state, { payload }) {
      return { ...state, [payload.name]: payload.value };
    },
    [actions.clearAll.TRIGGER]() {
      return verifyInitial;
    },
  },
  verifyInitial
);

const verifyErrors = handleActions(
  {
    [actions.pushVerify.FAILURE](state, { payload }) {
      return payload;
    },
    [actions.clearAll.TRIGGER]() {
      return {};
    },
  },
  {}
);

const newVerify = combineReducers({
  status: makeStatusWithResetReducer(actions.pushVerify, actions.clearAll),
  input: verifyInput,
  errors: verifyErrors,
});

export const verify = combineReducers({
  newVerify
});
