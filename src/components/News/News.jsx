import React from 'react'
import classes from './News.module.css';
import img from '../Image/news.png'

const News = (props) => {
    return (
        <div className={classes.newsWrapper}>
            {
                props.news.map((news, i) =>
                    <div key={i} className={classes.news}>
                        <div className={classes.content}>
                            <div className={classes.source}>{news.source.name}</div>
                            <h3>{news.title}</h3>
                            <img src={!news.urlToImage ? img : news.urlToImage} alt='img' />
                            <p>{news.description}</p>
                        </div>
                        <div className={classes.href}>
                            <a href={news.url}>Read More</a>
                        </div>
                    </div>)
            }
        </div>
    )
}

export default News
