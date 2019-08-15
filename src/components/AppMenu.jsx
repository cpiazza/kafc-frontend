import React, { Component } from 'react';
import { NavLink } from 'react-router-dom'
import store from '../appStore'

const state = store.getState();

class AppMenu extends Component {
  render () {
    const loggedIn = state.auth.user !== undefined;

    if (loggedIn) {
      return (
        <div id="app-menu" className="app-menu">
          <NavLink exact to="/dashboard" className="menu-item">Dashboard</NavLink>
          <NavLink exact to="/players" className="menu-item">Players</NavLink>
          <NavLink exact to="/users" className="menu-item">Users</NavLink>
          <NavLink exact to="/teams" className="menu-item">Teams</NavLink>
          <NavLink exact to="/stats" className="menu-item">Stats</NavLink>
          <NavLink exact to="/matches" className="menu-item">Matches</NavLink>
        </div>
      )
    } else {
      return (
        <div id="app-menu" className="app-menu">
          <NavLink exact to="/" className="menu-item">Home</NavLink>
        </div>
      )
    }
  }
}

export default AppMenu;
