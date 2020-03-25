import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types'; 
import { logout } from '../actions/auth';


export class CustomLayout extends React.Component{
    
    static propTypes = {
        auth: PropTypes.object.isRequired,
        logout: PropTypes.func.isRequired
    }
    
    render(){
        const { isAuthenticated,user } = this.props.auth;

        isAuthenticated ? (
            localStorage.setItem('username',this.props.auth.user.username)
        ) : (
            console.log("")
        )

        const authLinks = (    

        <div>
            <button onClick= {this.props.logout}>Logout</button>
            {this.props.children} 
        </div>

        );

        const guestLinks = (

        <div>
            {this.props.children} 
        </div>

        );


    return (
        <div>
        { isAuthenticated ? authLinks : guestLinks }
        </div>
    );
    }
}

const mapStateToProps = state => ({
    auth: state.auth
});

export default connect(mapStateToProps,{ logout })(CustomLayout);