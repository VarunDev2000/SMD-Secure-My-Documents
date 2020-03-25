import React, { Component } from 'react';

import { Router,Route,Switch } from 'react-router-dom'; 
import { Provider } from 'react-redux';
import store from './store'

import history from './components/common/history';

import Error from './components/common/Error';

import PrivateRoute from './components/common/PrivateRoute';

//--------------------------------
import Login from './components/accounts/Login';
import changePassword from './components/accounts/change_password'
import { LoadUser } from './actions/auth';
//--------------------------------
import UserInfo from './components/userdetail/UserInfo';
import Add from './components/userdetail/Add';
import Edit from './components/userdetail/Edit';
//--------------------------------



class App extends Component {
  componentDidMount(){
    store.dispatch(LoadUser());
  };  

  render(){
  return (
    <div className="App">
      <Provider store = {store}>
        <Router history = {history}>
          <Switch>


            <Route exact path ='/login' component = {Login}/>

            <Route exact path ='/error' component = {Error}/>
            
            <PrivateRoute exact path ='/' component = {UserInfo}/>

            <PrivateRoute exact path ='/change-password' component = {changePassword}/>

            <PrivateRoute exact path ='/userdetail' component = {UserInfo}/>
            <PrivateRoute exact path ='/userdetail/edit/:id' component = {Edit}/>
            <PrivateRoute exact path ='/userdetail/add' component = {Add}/>


          </Switch>
        </Router>
      </Provider>
    </div>
  );
  }
}

export default App;
