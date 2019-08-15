import _ from "lodash";

import {
  USER_LOGIN_SUCCESSFUL,
  USER_LOGIN_UNSUCCESSFUL
} from '../../actions/actionConstants'

import update from 'immutability-helper';

const initialState = {
  user: undefined
};

export default (state = initialState, action) => {
  switch(action.type) {
    case USER_LOGIN_SUCCESSFUL:
      return update(state, {
        user: {
          $set: action.payload
        }
      });

    case USER_LOGIN_UNSUCCESSFUL:
      return update(state, {
        user: {
          $set: undefined
        }
      });

    default:
      return state;
  }
}

export const userLoggedIn = state => state.user !== undefined;
export const userEmail = state => _.get(state.user, 'email', false);
