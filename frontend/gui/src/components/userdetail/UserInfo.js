import React from 'react';
import CustomLayout from '../Layout';
import { connect } from 'react-redux';
import PropTypes from 'prop-types'; 
import { getUserdetail } from '../../actions/userdetail';


class UserInfo extends React.Component{

    static propTypes = {
        userdetail: PropTypes.array.isRequired,
    }

    state = {
        userdetail:{},
    }

    static propTypes = {
        getUserdetail: PropTypes.func.isRequired
    }   

    componentDidMount() {
        this.props.getUserdetail();
    }
      
    render(){
        return (
        <CustomLayout>
        </CustomLayout>
        );
    }
  }

const mapStateToProps = state => ({
    userdetail: state.userdetail.userdetail,
});


export default connect(mapStateToProps,{getUserdetail })(UserInfo);