import {helloWorld} from './helloWorld';
import {combineReducers} from 'redux';
import {routeReducer} from 'redux-simple-router';

module.exports = combineReducers({
  //helloWorld,
  routing: routeReducer
});
