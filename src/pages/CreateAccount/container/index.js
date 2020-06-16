/* eslint-disable react-hooks/exhaustive-deps */
import React, { useCallback, useMemo} from "react";
import { CreateAccount } from "../index";
import { useSelector, useDispatch } from "react-redux";
import {
  pushSignUp,
  saveSignUpField,
  clearAll,
} from "../../../modules/signUp/signUpActions";
import {
  findCurrentInputError,
  normalizeInputName,
} from "../../../utils/findCurrentInputError";
import { CardInfo } from "../../../components/infoCard";
import { SUCCESS } from "../../../config/constants";
import { Redirect } from "react-router-dom";
import routing from "../../../config/routing";

export const CreateAccountContainer = () => {
  const { errors, input, status } = useSelector(
    (state) => state.signUp.newUser
  );

  const dispatch = useDispatch();
  
  const isAuth = useMemo(() =>  status === SUCCESS, [status]);


  const handleChange = useCallback(
    ({ currentTarget }) => {
      let { name, checked } = currentTarget;
      let value =
        currentTarget.type === "checkbox"
          ? currentTarget.checked
          : currentTarget.value;
      dispatch(saveSignUpField({ name, value, checked }));
    },
    [errors, input, status]
  );
  const handleErrors = useCallback(
    (name) => {
      return Object.entries(errors).length > 0
        ? findCurrentInputError(name, errors)
        : null;
    },
    [errors]
  );

  const handleSubmit = useCallback(
    (e) => {
      e.preventDefault();
      dispatch(pushSignUp());
      if (
        !Object.keys(errors).length &&
        Object.values(input).filter(Boolean).length === 5
      ) {
        //status==="SUCCESS" token
        dispatch(clearAll());
      }
    },
    [errors]
  );
  if (
    !Object.keys(errors).length &&
    Object.values(input).filter(Boolean).length === 5
  ) {
    //status==="SUCCESS" token
    return (
      <CardInfo
        linkTo="/"
        content="Thanks a lot for completing the registration progress. A welcome message with further instructions has been sent to your email address"
      />
    );
  }

  return (
    <>
    {isAuth && (<Redirect to={routing().verifyEmail}/>)}
      <CreateAccount
        input={input}
        errors={errors}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        Notification={Notification}
        findCurrentInputError={findCurrentInputError}
        normalizeInputName={normalizeInputName}
        handleErrors={handleErrors}
      />
    </>
  );
};
