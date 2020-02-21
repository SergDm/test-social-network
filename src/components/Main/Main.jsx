import React from 'react';
import classes from './Main.module.css';
import logo from '../Image/logo2.png'

const Main = (props) => {
  return (
    <div className={classes.main}>
      <div className={classes.left}>
        <h2>Social Network SK</h2>
        <img src={logo} alt="logo" />
      </div>
      <div className={classes.right}>
        <div className={classes.test}>
        <h3><u>Testing</u></h3>
        <b>Login:</b><p>myreactppua@gmail.com</p>
        <b>Password:</b><p>freesh</p>
        </div>
      </div>
    </div>
  )
}

export default Main