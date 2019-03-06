import React, { Component } from 'react'
// import { $get } from '../../utils/request' ;
// import fetch from 'fetch';
// import fetch from 'dva/fetch';
import { $get } from '../../utils/request';

export default class Home extends Component {

  async componentWillMount() {
    // const res = await $get('/api/goods/list')
    // fetch('/api/goods/list').then(function(response) {
    //   return response.json();
    // }).then(function(data) {
    //   console.log(data);
    // }).catch(function(e) {
    //   console.log("Oops, error");
    // });
    const res = await $get('/api/goods/list')
    console.log('result', res)
  }

  getList() {
    
  }
  render() {
    return (
      <div>
        Home
      </div>
    )
  }
}
