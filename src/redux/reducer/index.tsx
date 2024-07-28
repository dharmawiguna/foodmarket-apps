import {combineReducers} from 'redux';
import {registerReducer, photoReducer} from './auth';
import {globalReducer} from './global';
import {homeReducer} from './home';
import {orderReducer} from './order';

const rootReducer = combineReducers({
  registerReducer,
  globalReducer,
  photoReducer,
  homeReducer,
  orderReducer,
});

export default rootReducer;
