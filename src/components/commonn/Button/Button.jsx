import React from 'react'
import classes from './Button.module.css'

const Button = ({ type, event, disabled, name }) => {

  const choiceStyle = (type) => {

    switch (type) {

      case 'baner':
        return classes.btnBaner;

      case 'search':
        return classes.button + ' ' + classes.buttonSearch;

      case 'log':
        return classes.button + ' ' + classes.btnLogout

      default:
        return classes.button;
    }
  }

  return (
    <button
      className={choiceStyle(type)}
      onClick={event}
      disabled={disabled}
    >
      {name}
    </button>
  )
}

export default Button