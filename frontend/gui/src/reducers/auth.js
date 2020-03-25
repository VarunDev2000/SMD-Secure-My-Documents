import {
    USER_LOADED,
    USER_LOADING,
    AUTH_ERROR,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    LOGOUT_SUCCESS,
    REGISTER_SUCCESS,
    REGISTER_FAIL,
    PASSWORD_CHANGE_ERROR,
    PASSWORD_CHANGED
} from '../actions/types'

import {setTokenTime} from '../components/common/setLocalStorageTime'

const initialstate = {
    token : localStorage.getItem('token'),
    isAuthenticated : null,
    isLoading : false,
    user : null,
    err : null,
    login_err : false,
    log_c : 0,
}


export default function(state = initialstate,action)
{
    switch(action.type){
        case USER_LOADING:
            return{
                ...state,
                isLoading: true
            }

        case USER_LOADED:
            return{
                ...state,
                isAuthenticated: true,
                isLoading: false,
                user: action.payload
            }

        case LOGIN_SUCCESS:
        case REGISTER_SUCCESS:
            setTokenTime();
            localStorage.setItem('token',action.payload.token);
            localStorage.setItem('Auth',true);
            localStorage.setItem('count',0);
            localStorage.setItem('lcount',0);
            return {
                ...state,
                ...action.payload,
                isAuthenticated: true,
                isLoading: false,
                login_err: false,
            }

        case AUTH_ERROR:
        case LOGOUT_SUCCESS:
        case REGISTER_FAIL:
            //localStorage.setItem('s_key',["1"])
            localStorage.removeItem('token');
            localStorage.removeItem('Auth');
            localStorage.removeItem('tokenSetupTime');
            localStorage.removeItem('count');
            localStorage.removeItem('s_key');
            localStorage.removeItem('lcount');
            localStorage.removeItem('username')

            return{
                ...state,
                token: null,
                user: null,
                isAuthenticated: false,
                isLoading: false,
            }


        case LOGIN_FAIL:
            localStorage.removeItem('token');
            localStorage.removeItem('Auth');
            localStorage.removeItem('tokenSetupTime');
            localStorage.removeItem('count');
            localStorage.removeItem('s_key');

            var c = localStorage.getItem('lcount');
            localStorage.setItem('lcount',c+1);

            return{
                ...state,
                token: null,
                user: null,
                isAuthenticated: false,
                isLoading: false,
                login_err: true,
                count : c + 1
            }


        case PASSWORD_CHANGED:
            var c = localStorage.getItem('count');
            localStorage.setItem('count',c+1);
            return{
                ...state,
                err: false,
                count: c + 1
            }


        case PASSWORD_CHANGE_ERROR:
            var c = localStorage.getItem('count');
            localStorage.setItem('count',c+1);
            return{
                ...state,
                err: true,
                count: c + 1
            }

        default:
            return state;
    }
}