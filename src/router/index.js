import React, { Component } from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import App from '../App';
import Login from '../pages/login'
import Regist from '../pages/regist'

export default class Router extends Component {
  render() {
    return (
      <HashRouter>
        <App>
          <Switch>
            <Route path='/login' component={Login}></Route>
            <Route path='/regist' component={Regist}></Route>
          </Switch>
        </App>
      </HashRouter>
    )
  }
}