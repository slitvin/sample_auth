import React from 'react';
import { Form,  Container, Row, Col, FormGroup, CustomInput } from "reactstrap";
import TextInput from '../../components/TextInput/TextInput';
import StyledButton from '../../components/styledButton';
import {ReactComponent as GoogleIcon} from '../../assets/images/google.svg'
import {ReactComponent as FacebookIcon} from '../../assets/images/facebook-logo.svg'
import { NavLink } from "react-router-dom";


const SignIn = ({ handleSubmit, handleChange, handleErrors }) => {
  return (

    <Container fluid="md" className="container__account">
      <div className="close"></div>

    <Row>
    <Col className="form account__form">
          <h4>Login</h4>
          <Form className="form" onSubmit={handleSubmit}>
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
                    name="password"
                    placeholder="Password"
                    error={handleErrors("password")}
                  />
                </FormGroup>
              </Col>
            </Row>
            <Row>
              <Col>
                <FormGroup>
                    <CustomInput id='rememberMe' type="checkbox" label='Remember me'/>
                </FormGroup>
              </Col>
            </Row>
            <StyledButton
              color="primary"
              type="submit"
              className="button-account button-account--no-border-radius submit-button"
              text="Login"
            />
          </Form>

          <div className="forgot-password__link"> 
            <NavLink to='/'> Forgot Password </NavLink>
          </div>
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
          Don't have an account?  <NavLink to='/create-account'> Sign Up </NavLink>
          </div>
        </Col>
      </Row>
    </Container>
  
  );
};

export default SignIn;
