import NewsAPI from './NewsApi'

const SET_NEWS = 'SET_NEWS'

const initialState = {
    articles:[],
    country: 'ua'
}

const newsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_NEWS: {
            return { ...state, articles: action.articles}
        }
        default:
            return state;
    }
}

export const setNewsAC = (articles) => ({type: SET_NEWS, articles})

export const getNews = (country) => {
    return async (dispatch) => {
      let data = await NewsAPI.getNews(country)
      dispatch(setNewsAC(data.articles));
    }
  }

export default newsReducer