/* eslint-disable react-hooks/exhaustive-deps */
import React, { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { SUCCESS } from "../../../config/constants";
import { useHistory } from "react-router-dom";
import { findCurrentInputError } from "../../../utils/findCurrentInputError";
import ConfirmEmail from "..";
import * as actions from "../../../modules/verifyEmail/verifyActions";
import * as signUpactions from "../../../modules/signUp/signUpActions";
import { verifySelectors } from "../../../modules/verifyEmail/verifySelectors";
export const ConfirmEmailContainer = () => {
  const { errors, status } = useSelector(verifySelectors.getVerifyCode);

  const dispatch = useDispatch();
  const history = useHistory();

  const handleSubmit = useCallback(
    (e) => {
      e.preventDefault();
      dispatch(actions.pushVerify());
    },
    [dispatch]
  );
  
  useEffect(() => {
    dispatch(signUpactions.clearAll());
  }, []);

  const handleErrors = useCallback(
    (name) => {
      return Object.entries(errors).length > 0
        ? findCurrentInputError(name, errors)
        : null;
    },
    [errors]
  );

  const handleChange = useCallback(
    ({ currentTarget }) => {
      const { name, value } = currentTarget;
      dispatch(actions.saveVerifyField({ name, value }));
    },
    [dispatch]
  );

  useEffect(() => {
    if (status === SUCCESS) {
      history.push("/test");
    }
  }, [status]);

  return (
      <>
    <ConfirmEmail
      handleChange={handleChange}
      handleSubmit={handleSubmit}
      handleErrors={handleErrors}
    />
    </>
  );
};
