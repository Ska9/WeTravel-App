import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form'
import common from './common';


const rootReducer = combineReducers({
  common,
  form: formReducer
});

export default rootReducer;