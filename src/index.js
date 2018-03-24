import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware, compose } from 'redux'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import reducers from './reducer'
import Login from './pages/login';
import Notfound from './pages/404';
import Routers from './router'
import './index.css';

const store = createStore( reducers, compose(
  applyMiddleware(thunk),
  window.devToolsExtension?window.devToolsExtension():f=>f
  )
)
ReactDOM.render(
  (<Provider store={store}>
    <BrowserRouter>
      <div id="app">
        <Switch>
          <Route exact path="/" component={Login}></Route>
          <Route path="/pagelist" component={Routers}></Route>
          <Route path="*" component={Notfound}></Route>
        </Switch>
      </div>
    </BrowserRouter>
  </Provider>), document.getElementById('root'));
