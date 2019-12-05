import {createStore, applyMiddleware, combineReducers} from 'redux';
import promiseMiddleware from 'redux-promise-middleware';
import hackerNewsReducer from './hackerNewsReducer';
import mediumReducer from './mediumReducer';
import redditReducer from './redditReducer';
import {composeWithDevTools} from 'redux-devtools-extension';

const rootReducer = combineReducers({
    hackerNews: hackerNewsReducer,
    medium: mediumReducer,
    reddit: redditReducer
})

export default createStore(rootReducer, applyMiddleware(promiseMiddleware));