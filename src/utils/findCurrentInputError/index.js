export const normalizeInputName = (name) =>
  name.replace(/_|\b\w/g, (target) => (target === '_' ? ' ' : target.toUpperCase()));

export const findCurrentInputError = (arg, errors) => {
  if (!Object.keys(errors).length) {
    return null;
  }
  let error = Object.entries(errors)
    .filter((currentInput) => currentInput.includes(arg))
    .flat(1);
  if (error[0] === arg) {
    return normalizeInputName(error.slice(-1).join());
  }
  return null;
};
