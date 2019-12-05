import axios from 'axios';

const initialState = {
    loading: false,
    articles: []
}

const REQUEST_ARTICLES = 'REQUEST_ARTICLES';

export function requestArticles(){
    let articles = axios.get('/api/medium').then(res => res.data)

    return {
        type: REQUEST_ARTICLES,
        payload: articles
    }
}

export default function reducer(state = initialState, action){
    const {type, payload} = action;
    switch(type){
        case REQUEST_ARTICLES + '_PENDING':
            return {...state, loading: true};
        case REQUEST_ARTICLES + '_FULFILLED':
            return {...state, articles: payload, loading: false}

        default:
            return state;
    }
}