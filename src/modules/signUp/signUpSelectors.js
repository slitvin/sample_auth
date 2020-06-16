const getNewUser = (state) => state.signUp.newUser;
const isAuth = (state) => state.signUp.isAuth;

export const signUpSelectors = {
  getNewUser,
  isAuth
};
