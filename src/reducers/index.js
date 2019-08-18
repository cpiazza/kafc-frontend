import { combineReducers } from 'redux';
import authReducer from './auth_reducer/authReducer'

const rootReducer = combineReducers({
  auth: authReducer
});

export default rootReducer;