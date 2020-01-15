import React from 'react';
import loader from '../../Image/Gear.svg';
import classes from './Loader.module.css';

let Preloader = (props) => {
  return (
    <div className={classes.loader}>
      <img src={loader} alt='loader' />
    </div>
  )
}

export default Preloader;