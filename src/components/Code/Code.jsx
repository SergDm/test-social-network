import React from 'react'
import classes from './Code.module.css'
import './BaseCode.css'
import baseCode from './BaseCode'
import { NavLink } from 'react-router-dom'

const CodeJs = () => {

  const baseCodeMain = baseCode.sort((a, b) => a.id - b.id).map(data =>
    <div id={data.id} key={data.id}>
      <h2><u>{data.title}</u></h2>
      {data.code}
      <a href={data.href}>
        <b>{data.href}</b></a>
    </div>)
  
  const menuCode = baseCode.map(item => 
  <a className={classes.menuCode} href={`#` + item.id} key={item.id}>{item.title}</a>
    )

  return (
    <div className={classes.code} >
      <p id='top' style={{position: 'absolute'}}></p>
      <NavLink to={'/quiz'}><button>quiz</button></NavLink>
      <h1><u>Native JavaScript</u></h1>
      <div className={classes.menuCodeMain}>{menuCode}</div>
      {baseCodeMain}
      <a className={classes.buttonTop} href="#top">Up</a>
    </div>
  )
}

export default CodeJs