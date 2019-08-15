import React, { Component } from 'react';
import store from '../../appStore'

const state = store.getState();

class Dashboard extends Component {
  render () {
    return (
      <div>
        <h1>You are now logged into KAFC!</h1>
        <h2>User is {state.auth.user}</h2>
      </div>
    )
  }
}

export default Dashboard;
