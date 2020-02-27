const SET_NEWS = 'SET_NEWS'

const initialState = {
    articles:[]
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

export default newsReducer