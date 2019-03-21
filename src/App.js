import React, { Component } from 'react';
import Layout from '@/components/Layout/index.js'
import './App.less';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Layout />
        { this.props.children }
      </div>
    );
  }
}

export default App;
