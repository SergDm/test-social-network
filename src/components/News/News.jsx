import React, { Component } from 'react'
import classes from './News.module.css'

class News extends Component {

  render() {
    return (
      <div className={classes.code} >
        <h1><u>Native JavaScript</u></h1>
        <div>
          <h2>Сортировка вставками:</h2>
          <details>
            <iframe height="600px" width="100%" src="https://repl.it/@SergDm/Insertion-Sort-JS?lite=true" scrolling="no" frameborder="no" allowtransparency="true" allowfullscreen="true" sandbox="allow-forms allow-pointer-lock allow-popups allow-same-origin allow-scripts allow-modals" title='Insertion-Sort'></iframe>
          </details>
        </div>
        <div>
          <h2>Сортировка пузырьком:</h2>
          <details>
            <iframe height="600px" width="100%" src="https://repl.it/@SergDm/Bubble-sort?lite=true" scrolling="no" frameborder="no" allowtransparency="true" allowfullscreen="true" sandbox="allow-forms allow-pointer-lock allow-popups allow-same-origin allow-scripts allow-modals" title='Bubble-Sort'></iframe>
          </details>
        </div>
      </div>
    )
  }
}

export default News