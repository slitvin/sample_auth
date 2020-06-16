import React, { useState, useCallback } from "react";
import { Label, Input, FormFeedback, FormGroup, Button } from "reactstrap";
import "./TextInput.scss";

const TextInput = ({
  name,
  type = "text",
  labelText,
  labelIcon,
  note,
  onChange,
  error,
  className,
  forwardRef,
  children,
  ...rest
}) => {
  const key = `${name}_${type}_input`;

  const classes = ["input__block"];

  if (error) {
    classes.push("error");
  }

  if (className) {
    classes.push(className);
  }
  const [passType, setType] = useState("password");

  const showButton = useCallback(() => {
    switch (passType) {
      case "password":
        setType("text");
        break;
      case "text":
        setType("password");
        break;
      default:
        setType("password");

        break;
    }
  }, [setType, passType]);


  return (
    <FormGroup className={classes.join(" ")}>
      <Label htmlFor={key} className="input__label">
        {labelIcon}
        {labelText}
      </Label>
      {type === "password" ? (
        <Input
          id={key}
          type={passType}
          className="input__field"
          onChange={onChange}
          name={name}
          ref={forwardRef}
          {...rest}
        />
      ) : error ? (
        <Input
          invalid
          id={key}
          className="input__field"
          onChange={onChange}
          name={name}
          type={type}
          ref={forwardRef}
          min={0}
          {...rest}
        />
      ) : (
        <Input
          id={key}
          className={className}
          onChange={onChange}
          name={name}
          type={type}
          ref={forwardRef}
          min={0}
          {...rest}
        />
      )}
      {(note || error) && (
        <FormFeedback className="input__note">{error || note}</FormFeedback>
      )} 
      {children}

      {type === "password" && <Button className="show-button" onClick={showButton}> {passType === 'password' ? 'Show' : 'Hide' } </Button>}
    </FormGroup>
  );
};

export default TextInput;
