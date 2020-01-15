import React from 'react';
import classes from './DialogItem.module.css';
import { NavLink } from 'react-router-dom';
import ava from '../../Image/ava2.png';


const DialogItem = (props) => {
  let path = '/dialogs/' + props.id;
  return <div className={classes.dialog}>
    <img src={ava} alt='ava' />
    <NavLink to={path}>{props.name}</NavLink>
  </div>
}

export default DialogItem;