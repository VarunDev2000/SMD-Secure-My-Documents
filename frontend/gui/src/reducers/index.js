import { combineReducers } from 'redux';

import auth from './auth';
import userdetail from './userdetail';



export default combineReducers({

    auth,
    userdetail,
    
});