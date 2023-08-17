import { createStore, applyMiddleware, compose } from 'redux';
import promiseMiddleware from 'redux-promise';

import { combineReducers } from 'redux';

import User from "./reducers/user_reducer"
import News from "./reducers/news_reducer"
import Games from "./reducers/games_reducer"

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;


const reducers = combineReducers({
    User,
    News,
    Games
})

const store = createStore(reducers, composeEnhancers(
    applyMiddleware(promiseMiddleware)
))

export default store