import React, { Component } from 'react';
import axios from 'axios';

class Users extends Component {
  state = {
    users: []
  };

  componentDidMount() {
    axios.get('users').then(response => {
      const users = response.data.users;
      this.setState({ users })
      }
    )
  }

  render () {
    return (
      <div>
        <h1>Users</h1>
        <ul>
          { this.state.users.map(user => <li key={user.id}>{user.first_name} {user.last_name} - {user.email}</li>) }
        </ul>
      </div>
    )
  }
}

export default Users;
