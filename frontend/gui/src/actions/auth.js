import axios from 'axios';
import{
    USER_LOADED,
    USER_LOADING,
    AUTH_ERROR,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    LOGOUT_SUCCESS,
    REGISTER_SUCCESS,
    REGISTER_FAIL,
    PASSWORD_CHANGED,
    PASSWORD_CHANGE_ERROR
}from './types';

//Check Token & Load User
export const LoadUser = () => (dispatch,getState) => {
    //User Loading
    dispatch({
        type:USER_LOADING
    });

    axios.get('http://127.0.0.1:8000/api/auth/user',tokenConfig(getState))
    .then(res => {
        dispatch({
            type: USER_LOADED,
            payload:res.data
        });
    }).catch(err => {
        console.log("Error fetching Data..");
        dispatch({
            type:AUTH_ERROR,
        });
    });
}


//Login User
export const login = (username,password) => dispatch => {

    //Headers
    const config = {
        headers :{
            'Content-Type': 'application/json'
        }
    }

    //Request Body
    const body = JSON.stringify({ username,password });

    axios.post('http://127.0.0.1:8000/api/auth/login',body,config)
    .then(res => {
        dispatch({
            type: LOGIN_SUCCESS,
            payload:res.data
        });
    }).catch(err => {
        console.log("Error Logging in..");
        //console.log(err);
        dispatch({
            type:LOGIN_FAIL,
            payload:err.response.status
        });
    });
}


//Logout User
export const logout = () => (dispatch,getState) => {



 
    axios.post('http://127.0.0.1:8000/api/auth/logout',null,tokenConfig(getState))
    .then(res => {
        dispatch({
            type: LOGOUT_SUCCESS
        });
    }).catch(err => {
        console.log("Error Logging out..");
        dispatch({
            type:AUTH_ERROR
        });
    });
}


//Setup config with token - helper function
export const tokenConfig = getState => {

    //Get token from state
    const token = getState().auth.token;

    //Headers
    const config = {
        headers :{
            'Content-Type': 'application/json'
        }
    }

    //If Token,add to headers config
    if(token)
    {
        config.headers['Authorization'] = `Token ${token}`;
    }

    return config;
}




//Check Token & Load User
export const changePass = (old_password,new_password) => (dispatch,getState) => {

    const body = JSON.stringify({ old_password,new_password });

    axios.put('http://127.0.0.1:8000/api/auth/change_password',body,tokenConfig(getState))
    .then(res => {
        dispatch({
            type: PASSWORD_CHANGED,
            payload:res.data
        });
    }).catch(err => {
        console.log("Error changing Password..");
        dispatch({
            type:PASSWORD_CHANGE_ERROR,
        })
    });

}



//------------------------------------------------------------------------------
//Register User
export const register = ({ username,password,email }) => dispatch => {

    //Headers
    const config = {
        headers :{
            'Content-Type': 'application/json'
        }
    }

    //Request Body
    const body = JSON.stringify({ username,email,password });

    axios.post('http://127.0.0.1:8000/api/auth/register',body,config)
    .then(res => {
        dispatch({
            type: REGISTER_SUCCESS,
            payload:res.data
        });
    }).catch(err => {
        console.log("Error Registering..");
        dispatch({
            type:REGISTER_FAIL
        });
    });
}
