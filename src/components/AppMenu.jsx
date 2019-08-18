import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom'
import store from '../appStore'

export class AppMenu extends Component {

  render () {
    const loggedIn = this.props.userLoggedIn;

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
          <NavLink exact to="/login" className="menu-item">Login</NavLink>
        </div>
      )
    }
  }
}

store.subscribe(() => mapStateToProps(store.getState()));

AppMenu.propTypes = {
  userLoggedIn: PropTypes.bool
};

AppMenu.defaultProps = {
  AppMenu: false
};

function mapStateToProps(state) {
  return {
    userLoggedIn: state.auth.user !== undefined
  }
}

export default connect(mapStateToProps)(AppMenu);
