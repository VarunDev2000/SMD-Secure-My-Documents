import React from 'react';
import { Route } from "react-router-dom";
import { connect } from 'react-redux';
import { setTokenTime } from './setLocalStorageTime'
import history from './history'

const PrivateRoute = ({ component: Component,auth,...rest }) =>(
    <Route {...rest} 
    render={props =>{
        
        const isAuth = localStorage.getItem('Auth');

        setTokenTime();
        
        if(!isAuth)
        {
            history.push('/login',"_self");
        }
  
        else
        {
            return <Component {...props}{...rest}/>
        }
    }}
    />
);


const mapStateToProps = state => ({
    auth: state.auth
});

export default connect(mapStateToProps)(PrivateRoute);