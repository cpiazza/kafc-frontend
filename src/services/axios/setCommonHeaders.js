export function setCommonHeaders(Axios) {
  Axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*'
}