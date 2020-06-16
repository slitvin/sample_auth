import { combineReducers } from 'redux';
import { handleActions } from 'redux-actions';
import * as actions from './signUpActions';
import { makeStatusWithResetReducer } from '../helpers/reduxHelpers';

const signUpInitial = {
  First_Name: '',
  Last_Name: '',
  email: '',
  Password: '',
};

const signUpInput = handleActions(
  {
    [actions.saveSignUpField.TRIGGER](state, { payload }) {
      return { ...state, [payload.name]: payload.value };
    },
    [actions.clearAll.TRIGGER]() {
      return signUpInitial;
    }
  },
  signUpInitial
);

const signUpErrors = handleActions(
  {
    [actions.pushSignUp.FAILURE](state, { payload }) {
      return payload;
    },
    [actions.clearAll.TRIGGER]() {
      return {};
    }
  },
  {}
);

const newUser = combineReducers({
  status: makeStatusWithResetReducer(actions.pushSignUp, actions.clearAll),
  input: signUpInput,
  errors: signUpErrors
});

const isAuth = handleActions(
  {
    [actions.pushSignUp.SUCCESS]() {
      return true;
    }
  },
  false
);

export const signUp = combineReducers({
  isAuth,
  newUser
});
