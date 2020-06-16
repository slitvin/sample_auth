import { combineReducers } from 'redux';
import { signIn } from './modules/signIn/signInReducer';
import { signUp } from './modules/signUp/signUpReducer';
import resetPassword from './modules/resetPassword/resetReducer';
import {verify} from './modules/verifyEmail/verifyReducer';

export const rootReducer = combineReducers({
  signIn,
  signUp,
  resetPassword,
  verify
});
