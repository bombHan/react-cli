import React, { Component } from 'react';
import logo from './logo.svg';
import './App.scss';
import SetRouter from './router';
import Header from './components/Header'
import Menu from './components/Menu'
import { Route } from 'react-router-dom';
import Title from './components/Title'

class App extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="App">
        <Route path='/' component={Header}/>
        <Route path='/' component={Menu}/>
        <Route path='/' component={Title}/>
        <div className="layout-main"><SetRouter /></div>
      </div>
    );
  }
}

export default App;
