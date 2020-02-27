import NewsAPI from './NewsApi'

const SET_NEWS = 'SET_NEWS'
const TOGGLE_IS_LOAD = 'TOGGLE_IS_LOAD'

const initialState = {
    articles: [],
    country: 'ua',
    isLoad: true
}

const newsReducer = (state = initialState, action) => {
    switch (action.type) {

        case SET_NEWS:
            return {
                ...state, articles: action.articles
            };
        case TOGGLE_IS_LOAD:
            return {
                ...state, isLoad: action.isLoad
            };
        default:
            return state;
    }
}

export const setNewsAC = (articles) => ({ type: SET_NEWS, articles })

export const toggleIsLoad = (isLoad) => ({ type: TOGGLE_IS_LOAD, isLoad })

export const getNews = (country) => {
    return async (dispatch) => {
        dispatch(toggleIsLoad(true));
        let data = await NewsAPI.getNews(country)
        dispatch(toggleIsLoad(false));
        dispatch(setNewsAC(data.articles));
    }
}

export default newsReducer