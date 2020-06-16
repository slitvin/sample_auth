import React from "react";
import { Form, Container, Row, Col, FormGroup } from "reactstrap";
import TextInput from "../../components/TextInput/TextInput";
import StyledButton from "../../components/styledButton";
import {ReactComponent as GoogleIcon} from '../../assets/images/google.svg'
import {ReactComponent as FacebookIcon} from '../../assets/images/facebook-logo.svg'
import { NavLink } from "react-router-dom";

export const CreateAccount = ({
  handleChange,
  handleSubmit,
  handleErrors,
}) => {

  return (
    <Container fluid="md" className="container__account">
      <div className="close"></div>
      <Row>
        <Col className="form account__form">
          <h4>Sign up</h4>

          <Form className="form" onSubmit={handleSubmit}>
            <Row>
              <Col md={6}>
                <FormGroup>
                  <TextInput
                    className="account__input"
                    onChange={handleChange}
                    type="text"
                    name="First_Name"
                    placeholder="First Name"
                    error={handleErrors("First_Name")}
                  />
                </FormGroup>
              </Col>
              <Col md={6}>
                <FormGroup>
                  <TextInput
                    className="account__input"
                    onChange={handleChange}
                    type="text"
                    name="Last_Name"
                    placeholder="Last Name"
                    error={handleErrors("Last_Name")}
                  />
                </FormGroup>
              </Col>
            </Row>
            <Row>
              <Col>
                <FormGroup>
                  <TextInput
                    className="account__input"
                    onChange={handleChange}
                    type="email"
                    name="email"
                    placeholder="Email"
                    error={handleErrors("email")}
                  />
                </FormGroup>
              </Col>
            </Row>
            <Row>
              <Col>
                <FormGroup>
                  <TextInput
                    className="account__input"
                    onChange={handleChange}
                    type="password"
                    name="Password"
                    placeholder="Password"
                    error={handleErrors("Password")}
                  />
                </FormGroup>
              </Col>
            </Row>
            <StyledButton
              color="primary"
              className="button-account button-account--no-border-radius submit-button"
              text="Sign Up"
            />
          </Form>
          <div className="form__way-wrapper">
            <div className="form__way-connection">or</div>
          </div>
          <div className="social__login">
          <div>
            <StyledButton
              color="primary"
              className="button-account button-account--no-border-radius facebook"
              text="Facebook"
              icon={<FacebookIcon className="button-icon" />}
            />
          </div>
          <div>
            <StyledButton
              color="danger"
              className="button-account button-account--no-border-radius"
              text="Google"
              icon={<GoogleIcon className="button-icon"/>}
            />
          </div>
          </div>
        </Col>
      </Row>
      <Row>
        <Col>
          <div className="form__message">
          Already have an account? <NavLink to='/login'> Login </NavLink>
          </div>
        </Col>
      </Row>
    </Container>
  );
};
