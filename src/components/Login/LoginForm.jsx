import React from 'react';
import { reduxForm } from 'redux-form';
import { Input, createField } from '../commonn/FormsControls/FormsControls';
import { required } from '../../utility/validators/validator';
import classes from './Login.module.css';


const LoginForm = ({ handleSubmit, error, captchaUrl }) => {
  return (
    <form onSubmit={handleSubmit} >
      { createField('Email', 'email', Input, [required]) }

      { createField('Password', 'password', Input, [required], { type: 'password' }) }

      { createField(null, 'rememberMe', Input, [], { type: 'checkbox' }, 'Запомнить меня') }

      { captchaUrl && <img src={captchaUrl} alt='captcha' /> }
      { captchaUrl && createField('Symbols from image', 'captcha', Input, [required], {}) }

      {error
        ? <div className={classes.formSummaryError}> {error} </div>
        : null}
      <div>
        <button>Log in</button>
      </div>
    </form>
  )
}

export const LoginReduxForm = reduxForm({ form: 'login' })(LoginForm)