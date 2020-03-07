import React from 'react';
import classes from './Header.module.css';
import image from '../Image/logo2.png';
import { Link } from 'react-router-dom';
import Button from '../commonn/Button/Button';

const Header = (props) => {
  return <header className={classes.header}>
    <Link to={'/'}>
      < img src={image} alt='logo' />
    </Link>
    <div className={classes.loginBlock}>
      {props.isAuth
        ? <div>
          {props.login}
          <Button
            name='Logout'
            event={props.logout}
            type='log' />
        </div>
        : <Link to={'/login'}>
          <Button
            name='Login'
            type='log' />
        </Link>}
    </div>
  </header>;
}

export default Header;