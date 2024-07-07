import {combineReducers} from 'redux';
import {registerReducer, photoReducer} from './auth';
import {globalReducer} from './global';

const rootReducer = combineReducers({
  registerReducer,
  globalReducer,
  photoReducer,
});

export default rootReducer;
