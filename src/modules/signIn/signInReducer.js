import { combineReducers } from 'redux';
import { handleActions } from 'redux-actions';
import * as actions from './signInActions';
import { makeStatusWithResetReducer } from '../helpers/reduxHelpers';

const signInInitial = {
  email: '',
  password: ''
};

const signInInput = handleActions(
  {
    [actions.saveSignInField.TRIGGER](state, { payload }) {
      return { ...state, [payload.name]: payload.value };
    },
    [actions.clearAll.SUCCESS]() {
      return signInInitial;
    }
  },
  signInInitial
);

const signInErrors = handleActions(
  {
    [actions.pushSignIn.FAILURE](state, { payload }) {
      return payload;
    },
    [actions.clearAllErrors.TRIGGER]() {
      return {};
    }
  },
  {}
);

const login = combineReducers({
  status: makeStatusWithResetReducer(actions.pushSignIn, actions.clearAll),
  input: signInInput,
  errors: signInErrors
});

const isAuth = handleActions(
  {
    [actions.pushSignIn.SUCCESS]() {
      return true;
    }
  },
  false
);

export const signIn = combineReducers({
  isAuth,
  login
});
