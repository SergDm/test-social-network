import React from 'react'
import classes from './Code.module.css'
import './BaseCode.css'
import baseCode from './BaseCode'

const CodeJs = () => {

  const baseCodeMain = baseCode.sort((a, b) => a.id - b.id).map(data =>
    <div>
      <h2>{data.title}</h2>
      {data.code}
      <a href={data.href}>
        <b>{data.href}</b></a>
    </div>)

  return (
    <div className={classes.code} >
      <h1><u>Native JavaScript</u></h1>
      {baseCodeMain}
    </div>
  )
}

export default CodeJs