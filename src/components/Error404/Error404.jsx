import React from 'react'
import err from '../Image/404.png'
import classes from './Error404.module.css'
import { Link } from 'react-router-dom'
import Button from '../commonn/Button/Button'

const Error = () => {
  return (
    <div className={classes.error}>
      <div className={classes.img404}>
        <img src={err} alt="Error 404" />
      </div>
      <div className={classes.textError}>
        <h2>Ой! Страницы почему-то нет...</h2>
        Это могло произойти по разным причинам:
        <ul>
        <li>страница была, но ее удалили или переместили;</li>
        <li>адрес с ошибкой. Например, вы набрали его с ошибкой или же перешли с другого сайта, где он указан с ошибкой;</li>
        <li>страницы никогда не было. На нашем сайте есть много других полезных и нужных страниц.</li>
        <hr/>
        <Link to={'/'}><Button name='Перейти на главную страницу'/></Link>
        </ul>
      </div>
    </div>
  )
}

export default Error