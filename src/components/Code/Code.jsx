import React from 'react'
import classes from './Code.module.css'
import './BaseCode.css'
import baseCode from './BaseCode'

const CodeJs = () => {

  const baseCodeMain = baseCode.sort((a, b) => a.id - b.id).map(data =>
    <div id={data.id}>
      <h2>{data.title}</h2>
      {data.code}
      <a href={data.href}>
        <b>{data.href}</b></a>
    </div>)
  
  const menuCode = baseCode.map(item => 
  <div className={classes.menuCode}><a href={`#` + item.id}>{item.title}</a></div>
    )

  return (
    <div className={classes.code} >
      <p id='top'></p>
      <h1 align='center'><u>Native JavaScript</u></h1>
      <div className={classes.menuCodeMain}>{menuCode}</div>
      {baseCodeMain}
      <a className={classes.buttonTop} href="#top">Up</a>
    </div>
  )
}

export default CodeJs