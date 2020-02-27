import News from './News'
import { connect } from 'react-redux'
import { setNewsAC } from './newsReducer'

let mapStateToProps = (state) => {
    return {
        news: state.newsPage.articles
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        setNews: (articles) => {
            dispatch(setNewsAC(articles))
        }
    }

}

export default connect(mapStateToProps, mapDispatchToProps)(News)