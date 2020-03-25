import React from 'react';
import history from '../common/history';

class Error extends React.Component{

    changePage = (url) => {
        history.push(url)
      }

    render(){
        return (
            <div>
                <center>
                    <h1>Oops!</h1>
                    <h2>Something went Wrong..</h2>
                </center>
            </div>
        )
    }
}
    
export default Error;