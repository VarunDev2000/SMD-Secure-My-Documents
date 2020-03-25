import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import auth from './auth';
import userdetail from './userdetail';



export default combineReducers({
    form: formReducer,
    
    auth,
    userdetail,
});