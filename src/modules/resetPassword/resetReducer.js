import { combineReducers } from 'redux';
import { handleActions } from 'redux-actions';
import * as actions from './resetActions';

const resetEmailInitial = '';

const resetEmail = handleActions(
  {
    [actions.saveResetEmailField.TRIGGER](state, { payload }) {
      return payload;
    },
    [actions.clearResetEmail.TRIGGER]() {
      return resetEmailInitial;
    }
  },
  resetEmailInitial
);

const resetErrors = handleActions(
  {
    [actions.pushResetPassword.FAILURE](state, { payload }) {
      return payload;
    },
    [actions.clearResetErrors.TRIGGER]() {
      return {};
    }
  },
  {}
);

export const resetPassword = combineReducers({
  resetEmail,
  errors: resetErrors
});

export default resetPassword;
