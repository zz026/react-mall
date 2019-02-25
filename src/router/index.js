import React, { Component } from 'react';
import { HashRouter, Route, Switch, Redirect } from 'react-router-dom';
import App from '../App';
import Login from '../pages/login'
import Regist from '../pages/regist'
import Home from '../pages/home'

export default class Router extends Component {
  state = {
    hasLogin: false
  }
  getDefaultRoute() {
    return this.state.hasLogin ? '/home' : '/login';
  }
  render() {
    return (
      <HashRouter>
        <App>
          <Switch>
            <Route path='/' exact render={()=> (
               <Redirect to='home' />
            )}/>
            <Route path='/login' component={Login}></Route>
            <Route path='/regist' component={Regist}></Route>
            <Route path='/home' component={Home}></Route> 
          </Switch>
        </App>
      </HashRouter>
    )
  }
}