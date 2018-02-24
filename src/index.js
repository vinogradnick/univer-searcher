import React from 'react';
import { Provider } from 'react-redux'
import ReactDOM from 'react-dom';
import HomePage  from './containers/HomePage';
import { createStore, combineReducers } from 'redux'
import { Router, Route, browserHistory } from 'react-router'
import { syncHistoryWithStore, routerReducer } from 'react-router-redux'
import registerServiceWorker from './middleware/registerServiceWorker';
import store from './store/store';

//Навигация по элементам  и синхронизация событий навигации
const history = syncHistoryWithStore(browserHistory,store)

ReactDOM.render(
<Provider store={store}>
    { /* Tell the Router to use our enhanced history */ }
    <Router history={history}>
      <Route path="/" component={HomePage}>
     
      </Route>
    </Router>
  </Provider>, 
document.getElementById('root'));
registerServiceWorker();
