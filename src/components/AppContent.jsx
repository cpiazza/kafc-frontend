import React, { Component } from 'react';
import { Route } from 'react-router-dom'
import Homepage from './homepage/Homepage'
import Dashboard from './dashboard/Dashboard'
import Players from './players/Players'
import Users from './users/Users'
import Teams from './teams/Teams'
import Stats from './stats/Stats'
import Matches from './matches/Matches'
import Login from './login/Login'

class AppContent extends Component {
  render () {
    return (
      <div id="app-content" className="app-content">
        <Route exact path="/" component={Homepage} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/dashboard" component={Dashboard} />
        <Route exact path="/players" component={Players} />
        <Route exact path="/users" component={Users} />
        <Route exact path="/teams" component={Teams} />
        <Route exact path="/stats" component={Stats} />
        <Route exact path="/matches" component={Matches} />
      </div>
    )
  }
}

export default AppContent;
