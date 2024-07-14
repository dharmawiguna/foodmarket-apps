import {combineReducers} from 'redux';
import {registerReducer, photoReducer} from './auth';
import {globalReducer} from './global';
import {homeReducer} from './home';

const rootReducer = combineReducers({
  registerReducer,
  globalReducer,
  photoReducer,
  homeReducer,
});

export default rootReducer;
