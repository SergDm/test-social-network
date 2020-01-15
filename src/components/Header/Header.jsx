import React from 'react';
import classes from './Header.module.css';
import image from '../Image/logo2.png';
import { NavLink } from 'react-router-dom';

const Header = (props) => {
  return <header className={classes.header}>
    <a href='/'>
      < img src={image} alt='logo' />
    </a>
    <div className={classes.loginBlock}>
      { props.isAuth 
      ? <div>{props.login}<button className={classes.button} onClick={props.logout}>Log Out</button> </div> 
      : <NavLink to= {'/login'}>Login</NavLink> }
    </div>
  </header>;
}

export default Header;