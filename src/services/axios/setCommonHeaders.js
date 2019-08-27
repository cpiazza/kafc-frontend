import store from '../../appStore'

export function setCommonHeaders(Axios) {
  const state = store.getState();

  Axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*'

  if (state.auth.user !== undefined) {
      Axios.defaults.headers.common['Authorization'] = state.auth.user.jwt
  }
}
