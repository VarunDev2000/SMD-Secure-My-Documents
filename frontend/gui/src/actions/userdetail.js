import axios from 'axios';
import { tokenConfig } from './auth';
import{
    GET_USERINFO,
    ADD_USERINFO,
    EDIT_USERINFO,
    DELETE_USERINFO,
    GET_USERINFO_BY_ID
}from './types';

//GET STAFF INFO
export const getUserdetail = () => (dispatch,getState) => {

    axios.get('http://127.0.0.1:8000/api/userdetail/',tokenConfig(getState))
    .then(res => {
            dispatch({
                type: GET_USERINFO,
                payload: res.data
            });
    }).catch(err => {
        console.log("Error fetching Data..");
    });
}

export const getUserdetailbyID = (id) => (dispatch,getState) => {

    axios.get(`http://127.0.0.1:8000/api/userdetail/${id}/`,tokenConfig(getState))
    .then(res => {
            dispatch({
                type: GET_USERINFO_BY_ID,
                payload: res.data
            });
    }).catch(err => {
        console.log("Error fetching Data..");
    });
}


//ADD STAFF INFO
export const addUserdetail = userdetail => (dispatch,getState) => {

    axios.post('http://127.0.0.1:8000/api/userdetail/',userdetail,tokenConfig(getState))
    .then(res => {
            dispatch({
                type: ADD_USERINFO,
                payload: res.data
            });
    }).catch(err => {
        console.log("Error Adding information..");
    });
}


//EDIT STAFF INFO
export const editStaffinfo = (userdetail,id) => (dispatch,getState) => {

    axios.put('http://127.0.0.1:8000/api/userdetail/'+ id +'/',userdetail,tokenConfig(getState))
    .then(res => {
            dispatch({
                type: EDIT_USERINFO,
                payload: res.data
            });
    }).catch(err => {
        console.log("Error editing Data..");
    });
}

//DELETE STAFF INFO
export const deleteUserdetail = (id) => (dispatch,getState) => {
    axios.delete('http://127.0.0.1:8000/api/userdetail/'+ id +'/',tokenConfig(getState))
    .then(res => {
        dispatch({
            type: DELETE_USERINFO,
            payload: res.data
        });
    }).catch(err => {
        console.log("Cannot Delete Data..");
    });
}

