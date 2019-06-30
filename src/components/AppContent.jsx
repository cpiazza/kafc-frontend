import React, { Component } from 'react';
import { Route } from 'react-router-dom'
import Dashboard from './dashboard/Dashboard'
import Players from './players/Players'
import Users from './users/Users'
import Teams from './teams/Teams'
import Stats from './stats/Stats'
import Matches from './matches/Matches'

class AppContent extends Component {
  render () {
    return (
      <div id="app-content">
        <Route exact path="/" component={Dashboard} />
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
