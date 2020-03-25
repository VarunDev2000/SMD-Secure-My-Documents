import React from 'react';
import CustomLayout from '../Layout';
import { connect } from 'react-redux';
import PropTypes from 'prop-types'; 
import { getUserdetail } from '../../actions/userdetail';
import ipfs from '../../ipfs';


class MainPage extends React.Component{

    state = {
        userdetail:{},

        ipfsHash: "",
        buffer:null,
    }
    
    static propTypes = {
        userdetail: PropTypes.array.isRequired,
        getUserdetail: PropTypes.func.isRequired,
    }

    onFileUpload = (e) =>{
        e.preventDefault();
        const file = e.target.files[0];
        const reader = new window.FileReader();
        reader.readAsArrayBuffer(file);

        reader.onloadend = () =>{
            this.setState({
                buffer : Buffer(reader.result)
            })
        }
    }

    onSubmit = (e) =>{
        e.preventDefault();
        
        this.addFile(this.state.buffer);
    }

    async addFile(file){
        for await (const result of ipfs.add(file)) {
            this.setState({
                ipfsHash: result['path']
            })
        }
    }

    componentDidMount() {
        this.props.getUserdetail();
    }
      
    render(){
        return (
        <CustomLayout>
            <div>
                <h1>Upload Your Document Image Here!!</h1>
                <br/>
                <img src={`https://ipfs.io/ipfs/${this.state.ipfsHash}`} alt=""></img>
                <br/><br/>
                
                <form onSubmit={this.onSubmit}>
                    <input type="file" name="doc_img" accept="image/*" onChange={this.onFileUpload}/> 
                    <br/>
                    <button type="submit">Submit</button> 
                </form>  
            </div>
        </CustomLayout>
        );
    }
  }

const mapStateToProps = state => ({
    userdetail: state.userdetail.userdetail,
});


export default connect(mapStateToProps,{getUserdetail })(MainPage);
    