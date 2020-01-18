import React from 'react'
import classes from './News.module.css'
import './NewsCode.css'
import * as codeHight from './NewsCode'

const News = () => {

    return (
      <div className={classes.code} >
        <h1><u>Native JavaScript</u></h1>
        <div>
          <h2>Сортировка вставками:</h2>
            {codeHight.insertionSorting}
            <a href='https://repl.it/@SergDm/Insertion-Sort-JS'>
           <b> https://repl.it/@SergDm/Insertion-Sort-JS</b></a>
        </div>
        <div>
          <h2>Сортировка пузырьком:</h2>
         {codeHight.bubbleSort}
         <a href='https://repl.it/@SergDm/Bubble-sort'>
           <b> https://repl.it/@SergDm/Bubble-sort</b></a>
        </div>
        <div>
          <h2>Алгоритм Эвклида:</h2>
          {codeHight.code}
          <a href='https://repl.it/@SergDm/Euclidean-algorithm'>
           <b> https://repl.it/@SergDm/Euclidean-algorithm</b></a>
        </div>
      </div>
    )
  }


export default News