import React from 'react';
import { LoginReduxForm } from './LoginForm';
import { connect } from 'react-redux';
import { login } from '../../data/authReducer';
import { Redirect } from 'react-router-dom';
import classes from './Login.module.css';



const Login = (props) => {
  const onSubmit = (formData) => {
    props.login(formData.email, formData.password, formData.rememberMe, formData.captcha)
  }
  return props.isAuth ? <Redirect to={'/profile'} />
    : <div className={classes.login}>
      <h1>Login</h1>
      <LoginReduxForm onSubmit={onSubmit} captchaUrl={props.captchaUrl}/>
    </div>
}

const mapStateToProps = (state) => ({
isAuth: state.auth.isAuth,
captchaUrl: state.auth.captchaUrl
})

export default connect(mapStateToProps, { login })(Login);
