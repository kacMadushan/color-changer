import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/configureStore';
import { Provider } from 'react-redux';
import BoxContainer from './container/BoxContainer';
import './index.css';

const store = configureStore();
//console.log(store.getState(store));

const app = (
    <Provider store={store}>
        <BoxContainer />
    </Provider>
)

ReactDOM.render(app, document.getElementById('root'));
