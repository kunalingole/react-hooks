import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore,applyMiddleware,compose } from 'redux';
import reduxThunk from  'redux-thunk';

import 'bootstrap/dist/css/bootstrap.min.css';
import './style/style.scss';

import App from './App';
import rootReducer from './container/rootReducer';
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(rootReducer, composeEnhancers(applyMiddleware(reduxThunk)))

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));

