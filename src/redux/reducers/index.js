import {combineReducers} from 'redux';
import {routeReducer} from 'redux-simple-router';
import {helloWorld} from './helloWorld'

export default combineReducers({
  helloWorld,
  routing: routeReducer
});
