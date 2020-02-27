import React from 'react'
import { connect } from 'react-redux'
import { Component } from 'react'
import { compose } from 'redux'
import { getNews } from './newsReducer'
import News from './News'

class NewsContainer extends Component {
    componentDidMount() {
        const { country } = this.props
        this.props.getNews(country)
    }
    render() {
        return (
            <div>
                <News news={this.props.articles}/>
            </div>
        )
    }
}


let mapStateToProps = (state) => {
    return {
        articles: state.newsPage.articles,
        country: state.newsPage.country
    }
}


export default compose(connect(mapStateToProps, { getNews }))(NewsContainer)
