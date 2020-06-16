import React from "react";
import { Container, Row, Col, Form, FormGroup } from "reactstrap";
import TextInput from "../../components/TextInput/TextInput";
import StyledButton from "../../components/styledButton";
import {ReactComponent as RefreshIcon} from '../../assets/images/refresh.svg'
import {ReactComponent as BackIcon} from '../../assets/images/back.svg'
import { NavLink } from "react-router-dom";
import routing from "../../config/routing";

export default function ConfirmEmail({
  handleSubmit,
  handleChange,
  handleErrors,
}) {
  return (
    <Container fluid="md" className="container__account">
      <div className="close"></div>
      <Row>
        <Col className="form account__form">
        <h4>Check your email</h4>
        <div className="account__form-message">
        Enter the verification code we sent to your email
        </div>
        <Form className="form" onSubmit={handleSubmit}>

        <FormGroup>
                  <TextInput
                    className="account__input" 
                    onChange={handleChange}
                    type="text"
                    name="code"
                    placeholder="Enter code"
                    error={handleErrors("code")}
                  />
                </FormGroup>
                <StyledButton
              color="primary"
              type="submit"
              className="button-account button-account--no-border-radius submit-button"
              text="Verify"
            />
        </Form>
        </Col>
      </Row>
      <Row>
          <Col>
           <div className="navigation">
                <div className="back-button">
                    <NavLink to={routing().createAccount}>
                        <BackIcon className="link-icon back"/> Back
                    </NavLink>
                </div>
                <div className="resend-link">
                    <RefreshIcon  className="link-icon resend"/>  Resend Code
                </div>
           </div>
          </Col>
      </Row>
    </Container>
  );
}
