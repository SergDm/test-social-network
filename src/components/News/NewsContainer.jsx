import React from 'react'
import { connect } from 'react-redux'
import { Component } from 'react'
import { compose } from 'redux'
import { getNews } from './newsReducer'
import News from './News'
import Preloader from '../commonn/loader/Preloader'

class NewsContainer extends Component {
    componentDidMount() {
        const { country } = this.props
        this.props.getNews(country)
    }
    render() {
        return (
            
            <div>
                {this.props.isLoad ? <Preloader /> : null}
                <News news={this.props.articles}/>
            </div>
        )
    }
}


let mapStateToProps = (state) => {
    return {
        articles: state.newsPage.articles,
        country: state.newsPage.country,
        isLoad: state.newsPage.isLoad
    }
}


export default compose(connect(mapStateToProps, { getNews }))(NewsContainer)
