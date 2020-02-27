import React from 'react'
import *as axios from 'axios';
import classes from './News.module.css';

const News = (props) => {
    if (props.news.length === 0) {
        axios.get('http://newsapi.org/v2/top-headlines?country=ua&apiKey=e2645e6879df4e9b8a2612ccb6f1d6e8')
            .then(response => {
                props.setNews(response.data.articles)
            })
    }

    return (
        <div className={classes.newsWrapper}>
            {
                props.news.map((news, i) =>
                    <div key={i} className={classes.news}>
                        <div className={classes.source}>{news.source.name}</div>
                        <h3><u>{news.title}</u></h3>
                        <img src={news.urlToImage} alt='img' />
                        <p>{news.description}</p>
                        <a href={news.url}>Read More</a>
                    </div>)
            }
        </div>
    )
}

export default News
