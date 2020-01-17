import React, { Component } from 'react'
import classes from './News.module.css'

class News extends Component {

  state = {
    code: [1,2,3]
  }

  render() {
    const outputCode =
      this.state.code.map((str, i) => <div key={i}>{str}</div>)

    return (
      <div className={classes.content}>
        {outputCode}
      </div>
    )
  }
}

export default News