import React from 'react'
import classes from './ModalWindow.module.css'
import ava from '../Image/ava2.png'

const ModalWindow = (props) => {
  const classButton = `${classes.button} fa fa-check`;
  return (
    <div className={classes.modal}>
      <div className={classes.modalBody}>
        <button className={classButton} onClick={props.setModal}>Ok</button>
        <img src={props.foto ? props.foto : ava} alt='ui' />
      </div>
    </div>
  )
}

export default ModalWindow