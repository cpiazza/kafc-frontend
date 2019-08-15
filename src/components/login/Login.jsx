import React, { Component } from 'react';
import axios from 'axios';

class Login extends Component {
  constructor() {
    super();
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    console.log('Button Clicked!!')
    console.log(event)
  }

  render () {
    return (
      <div>
        <h1>Login</h1>
        <form onSubmit={this.handleSubmit}>
          <div className='form-row'>
            <label htmlFor="email">Email: </label>
            <input id="email" name="email" type="email" />
          </div>

          <div className='form-row'>
            <label htmlFor="password">Password: </label>
            <input id="password" name="password" type="password" />
          </div>

          <div className='form-row'>
            <button>Login</button>
          </div>
        </form>
      </div>
    )
  }
}

export default Login;