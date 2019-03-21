import React, { Component } from 'react';
import { NavLink } from 'react-router-dom'


class AppMenu extends Component {
  render () {
    return (
      <div id="app-menu" className="app-menu">
        <NavLink exact to="/" className="menu-item">
          Home
        </NavLink>
        <NavLink exact to="/players" className="menu-item">
          Players
        </NavLink>
      </div>
    )
  }
}

export default AppMenu;
