const getLogin = (state) => state.signIn.login;
const isAuth = (state) => state.signIn.isAuth;

export const signInSelectors = {
  getLogin,
  isAuth
};
