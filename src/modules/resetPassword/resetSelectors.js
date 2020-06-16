const getResetEmail = (state) => state.resetPassword.resetEmail;
const getResetErrors = (state) => state.resetPassword.errors;

export const resetSelectors = {
  getResetEmail,
  getResetErrors
};
