import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware, compose } from 'redux'
import { BrowserRouter, Link, Route, Redirect, Switch } from 'react-router-dom'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import reducers from './reducer'

import './index.css';
import Login from './pages/login';
import PageList from './pages/pagelist';
// import registerServiceWorker from './registerServiceWorker';
const store = createStore( reducers, compose(
  applyMiddleware(thunk),
  window.devToolsExtension?window.devToolsExtension():f=>f
  )
)
ReactDOM.render(
  (<Provider store={store}>
    <BrowserRouter>
      <div>
        <Auth></Auth>
        <Switch>
          <Route exact path="/" component={Login}></Route>
          <Route path="/list" component={PageList}></Route>

        </Switch>
      </div>
    </BrowserRouter>
  </Provider>), document.getElementById('root'));
// registerServiceWorker();
