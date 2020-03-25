import React,{ Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { connect } from 'react-redux';
import PropTypes, { shape } from 'prop-types'; 
import { changePass } from '../../actions/auth';

export class changePassword extends Component{
    state = {
        username : '',
        oldpassword : '',
        password1 : '',
        password2 : '',
        pass_checked : false,
        disabled : false,

        errors : {}
    }

    static propTypes = {
      changePass: PropTypes.func.isRequired,
    }

    firstSubmit = e =>
    {
        e.preventDefault();
        if(this.state.password1 == this.state.password2)
        {
            this.setState({
                pass_checked : true
            })
        }
    }

    finalSubmit = e =>
    {
        e.preventDefault();
        //console.log(this.state.oldpassword)
        this.props.changePass(this.state.oldpassword,this.state.password1)
    }

    cancel = e =>{
        this.setState({
            pass_checked : false
        })
    }

    onChange = e =>{
        this.setState({
            [e.target.name] : e.target.value
        });
    }

    
    componentDidUpdate(prevProps)
    {
      if (this.props !== prevProps)
      {
        if(this.props.err == false)
        {
          this.setState({
            disabled : true
          })
          alert("Password Changed Successfully");
          window.open('/',"_self");
        }

        else if(this.props.err == true)
        {
          alert("Password Wrong!!")
        }
      }

    }


    render(){
        return(
        <div>
        {
        <div>
        <h2 className="text-center">CHANGE PASSWORD</h2><br/>
        {
        this.state.pass_checked == false ? (
        <div>
          <form onSubmit = {this.firstSubmit} className="change-pass-form">
            <div className="form-group">
              <label>*New Password</label>
              <input
                required
                type="password"
                className="form-control"
                name="password1"
                onChange = {this.onChange}
              />
            </div>
            <div className="form-group">
              <label>*Confirm Password</label>
              <input
                required
                type="password"
                className="form-control"
                name="password2"
                onChange = {this.onChange}
              />
            </div>
            <div className="form-group">
              <br/>
              <button type="submit" className="btn btn-primary">
                Next
              </button>
            </div>
          </form>
        </div>
        ) : (
            <form onSubmit = {this.finalSubmit} className="change-pass-form">
            <div className="form-group">
              <label>*Current Password</label>
              <input
                required
                type="password"
                className="form-control"
                name="oldpassword"
                onChange = {this.onChange}
              />
            </div>
            <div className="form-group">
              <br/>
              <div className = "row">
              <div className="col-sm-6">
              <button type="submit" className="btn btn-primary" disabled = {this.state.disabled}>
                Submit
              </button>
              </div>
              <div className = "col-sm-6" align = "right">
              <button className="btn btn-primary" onClick = {this.cancel} disabled = {this.state.disabled}>
                Cancel
              </button>
              </div>
              </div>
            </div>
          </form>
        )
        }
        </div>
        }
      
      </div>
        )
    }
}

const mapStateToProps = state => ({
  err: state.auth.err,
  count: state.auth.count
});

export default connect(mapStateToProps,{ changePass })(changePassword);