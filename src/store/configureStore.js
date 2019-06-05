import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import colorReducer from '../reducers';

export default () => {
    const store = createStore(
        colorReducer,
        applyMiddleware(thunk)
    );
    return store;
};