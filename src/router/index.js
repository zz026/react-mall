import React, { Component } from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import App from '../App';
import Login from '@/pages/login'
import Regist from '@/pages/regist'
import Home from '@/pages/home'
import Goods from '@/pages/goods'

export default class Router extends Component {
  state = {
    hasLogin: false
  }
  getDefaultRoute() {
    return this.state.hasLogin ? '/home' : '/login';
  }
  render() {
    return (
      <BrowserRouter>
        <App>
          <Switch>
            <Route path='/' exact render={()=> (
               <Redirect to='home' />
            )}/>
            <Route path='/login' component={Login}></Route>
            <Route path='/regist' component={Regist}></Route>
            <Route path='/home' component={Home}></Route> 
            <Route path='/goods' component={Goods}></Route> 
          </Switch>
        </App>
      </BrowserRouter>
    )
  }
}