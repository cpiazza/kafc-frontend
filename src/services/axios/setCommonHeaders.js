import store from '../../appStore'

const state = store.getState();

export function setCommonHeaders(Axios) {
  Axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*'
}
