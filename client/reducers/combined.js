import { combineReducers } from 'redux';
import config from './config';
import pledge from'./pledge';


const combinedReducers = combineReducers({
  config,
  pledge
});

export default combinedReducers;
