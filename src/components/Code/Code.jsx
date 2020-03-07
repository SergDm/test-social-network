import React, { useState, useEffect } from 'react'
import classes from './Code.module.css'
import './BaseCode.css'
import {codesJS} from './BaseCode'
import { NavLink } from 'react-router-dom'
import Button from '../commonn/Button/Button'

const CodeJs = () => {

  const [isTop, setTop] = useState(false)

  const handleScroll = () => {
    if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
      setTop(true)
    } else {
      setTop(false)
    }
  }

  useEffect(() => {
    document.addEventListener('scroll', handleScroll)
    return () => {
      document.removeEventListener('scroll', handleScroll)
    }
  })

  const baseCodeMain = codesJS.sort((a, b) => a.id - b.id).map(data =>
    <div id={data.id} key={data.id}>
      <h2><u>{data.title}</u></h2>
      {data.code}
      <a href={data.href}>
        <b>{data.href}</b></a>
    </div>)
  
  const menuCode = codesJS.map(item => 
  <a className={classes.menuCode} href={`#` + item.id} key={item.id}>{item.title}</a>
    )

  const classButton = `${classes.buttonTop} fa fa-arrow-up`;

  return (
    <div className={classes.code} >
      <p id='top' style={{position: 'absolute'}}></p>
      <NavLink to={'/code/quiz'}><Button name='QUIZ'/></NavLink>
      <h1><u>Native JavaScript</u></h1>
      <div className={classes.menuCodeMain}>{menuCode}</div>
      {baseCodeMain}
      {isTop && <a className={classButton} href="#top">Up</a>}
    </div>
  )
}

export default CodeJs