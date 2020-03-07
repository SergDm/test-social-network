import React from 'react'
import classes from './Button.module.css'

const Button = ({style,event, disabled, name}) => {
  return (
    <button
      className={style ? style : classes.button}
      onClick={event}
      disabled={disabled}
      >
      {name}
    </button>
  )
}

export default Button