import {
  USER_LOGIN_SUCCESSFUL,
  USER_LOGIN_UNSUCCESSFUL
} from '../../actions/actionConstants'

export function loginSuccess(payload) {
  return {type: USER_LOGIN_SUCCESSFUL, payload}
}

export function loginFailure(payload) {
  return {type: USER_LOGIN_UNSUCCESSFUL, payload}
}
