import *as axios from 'axios';

const apiKey = 'e2645e6879df4e9b8a2612ccb6f1d6e8'

const instans = axios.create({
    baseURL: 'http://newsapi.org/v2/'
})

const NewsAPI = {
    getNews(country = 'ua') {
        return instans
            .get(`top-headlines?country=${country}&apiKey=${apiKey}`)
            .then(response => response.data)
            }
    }

export default NewsAPI