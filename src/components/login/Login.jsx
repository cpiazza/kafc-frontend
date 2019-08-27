import React, { Component } from 'react';
import axios from 'axios';
import { loginSuccess } from '../../actions/auth/auth'
import { loginFailure } from '../../actions/auth/auth'
import store from '../../appStore'

window.store = store;

class Login extends Component {
  state = {
    loginError: undefined
  };

  constructor() {
    super();
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();

    const formData = new FormData(event.target);
    const loginParams = {
      user: {
        email: formData.get('email'),
        password: formData.get('password')
      }
    };

    axios.post('login', loginParams).then(response => {
      debugger;
      store.dispatch(loginSuccess(response.data['user']));
      this.props.history.push('/dashboard')
    }, (error) => {
      const loginError = true;

      this.setState({loginError});
      store.dispatch(loginFailure(error));
    })
  }

  render () {
    return (
      <div>
        <h1>Login</h1>
        <div className={this.state.loginError === undefined ? 'hidden' : 'error'}>
          Login Failed - Invalid email or password.
        </div>
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
