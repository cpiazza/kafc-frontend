import React, { Component } from 'react';
import { Route } from 'react-router-dom'
import Dashboard from './dashboard/Dashboard'
import Players from './players/Players'

class AppContent extends Component {
  render () {
    return (
      <div id="app-content">
        <Route exact path="/" component={Dashboard} />
        <Route exact path="/players" component={Players} />
      </div>
    )
  }
}

export default AppContent;
