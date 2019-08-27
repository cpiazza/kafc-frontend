import React, { Component } from 'react';
import PropTypes from "prop-types";
import { connect } from 'react-redux';

class Dashboard extends Component {
  render () {
    if (this.props.user === undefined) {
      const redirectUrl = '/login';
      window.location.replace(redirectUrl);
    }

    return (
      <div>
        <h1>You are now logged into KAFC!</h1>
        <h2>User is {this.props.user.name}</h2>
      </div>
    )
  }
}

Dashboard.propTypes = {
  user: PropTypes.object
};

Dashboard.defaultProps = {
  user: undefined
};

function mapStateToProps(state) {
  return {
    user: state.auth.user
  }
}

export default connect(mapStateToProps)(Dashboard);