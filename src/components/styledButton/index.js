import React from "react";
import { Button } from "reactstrap";

export default function StyledButton({ icon, text, ...rest }) {
  return (
    <>
      <Button {...rest}>{icon} {text}</Button>
    </>
  );
}
