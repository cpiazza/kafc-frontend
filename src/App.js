import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom'

import AppContainer from './components/AppContainer';

import './App.css';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <AppContainer/>
      </BrowserRouter>
    );
  }
}

export default App;
