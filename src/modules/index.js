import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import counter from './counter'
import about from './about';

export default combineReducers({
  router: routerReducer,
  counter,
  about
})
