/* eslint-disable react-hooks/exhaustive-deps */
import React, { useCallback, useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as actions from "../../modules/signIn/signInActions";
import SignIn from "./SignIn";
import { signInSelectors } from "../../modules/signIn/signInSelectors";
import { SUCCESS } from "../../config/constants";
import {  Redirect } from "react-router-dom";
import { findCurrentInputError } from "../../utils/findCurrentInputError";
import routing from "../../config/routing";

export const SignInContainer = () => {
  const { errors, status } = useSelector(signInSelectors.getLogin);
  const dispatch = useDispatch();

  const handleSubmit = useCallback(
    (e) => {
      e.preventDefault();
      dispatch(actions.pushSignIn());
    },
    [dispatch]
  );
  const isAuth = useMemo(() => status === SUCCESS, [status]);
  const handleErrors = useCallback(
    (name) => {
      return Object.entries(errors).length > 0
        ? findCurrentInputError(name, errors)
        : null;
    },
    [errors]
  );
 useEffect(() => {
  dispatch(actions.clearAll());
  dispatch(actions.clearAllErrors());

 }, [])
  const handleChange = useCallback(
    ({ currentTarget }) => {
      const { name, value } = currentTarget;
      dispatch(actions.saveSignInField({ name, value }));
    },
    [dispatch]
  );



  return (
    <>
      {isAuth && <Redirect to={routing().main} />}
      <SignIn
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        errors={errors}
        handleErrors={handleErrors}
      />
    </>
  );
};
