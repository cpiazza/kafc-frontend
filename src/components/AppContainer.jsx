import React, { Component } from 'react';
import AppMenu from './AppMenu';
import AppContent from "./AppContent";
import AppFooter from "./AppFooter";

class AppContainer extends Component {
  render () {
    return (
      <div id="app-container">
        <AppMenu/>
        <AppContent/>
        <AppFooter/>
      </div>
    )
  }
}

export default AppContainer;
