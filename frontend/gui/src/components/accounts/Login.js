import React,{ Component } from 'react';
import { Link,Redirect } from "react-router-dom";
//import 'bootstrap/dist/css/bootstrap.min.css';
import CustomLayout from '../Layout';
import { connect } from 'react-redux';
import PropTypes from 'prop-types'; 
import { login } from '../../actions/auth';

export class Login extends Component{
    state = {
        username : '',
        password : ''
    }

    static propTypes = {
      login: PropTypes.func.isRequired,
      isAuthenticated: PropTypes.bool 
    }

    onSubmit = e =>
    {
        e.preventDefault();
        this.props.login(this.state.username,this.state.password);
    }

    onChange = e =>{
        this.setState({
            [e.target.name] : e.target.value
        });
    }

    componentDidUpdate(prevProps)
    {
      if (this.props.count !== prevProps.count)
      {
        if(this.props.login_err == true)
        {
          alert("Username or Password is Wrong");
        }
      }

    }

    render(){
      if(this.props.isAuthenticated){
        return <Redirect to="/" />;
      }
        const { username,password } = this.state;
        return(
          <div>
          <CustomLayout>

          <h2>LOG IN</h2>
          <form onSubmit={this.onSubmit}>
              <label>Username  </label>
              <input
                type="text"
                name="username"
                onChange={this.onChange}
                value={username}
              />
              <br/>

              <label>Password  </label>
              <input
                type="password"
                name="password"
                onChange={this.onChange}
                value={password}
              />
              <br/>

              <button type="submit">
                Log In
              </button>
              <br/><br/>

            <p>
              Don't have an account? <Link to="/register">Register</Link>
            </p>
          </form>

      </CustomLayout>
      </div>
        )
    }
}

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated,
  login_err: state.auth.login_err,
  count: state.auth.count,
});

export default connect(mapStateToProps,{ login })(Login);